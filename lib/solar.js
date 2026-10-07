// Shared solar math — single source of truth for every calculator.
// Country presets carry local pricing, sun hours and incentives so all
// nine calculators produce consistent numbers.

export const COUNTRIES = {
  usa: {
    key: "usa",
    name: "USA",
    currency: "USD",
    symbol: "$",
    locale: "en-US",
    rate: 0.17, // $/kWh residential average
    sunHours: 4.2, // peak sun hours/day, national average
    costPerWatt: 2.75, // installed $/W
    panelWatt: 410,
    incentivePct: 30,
    incentiveLabel: "30% federal solar tax credit (ITC)",
    priceNote: "Average US install cost is $2.50–$3.50 per watt.",
  },
  uk: {
    key: "uk",
    name: "UK",
    currency: "GBP",
    symbol: "£",
    locale: "en-GB",
    rate: 0.24, // £/kWh
    sunHours: 2.9,
    costPerWatt: 1.35, // installed £/W
    panelWatt: 420,
    incentivePct: 0,
    incentiveLabel: "0% VAT on residential solar installs",
    priceNote: "A typical 4 kW UK system costs £5,000–£6,000 installed.",
  },
  india: {
    key: "india",
    name: "India",
    currency: "INR",
    symbol: "₹",
    locale: "en-IN",
    rate: 8, // ₹/kWh
    sunHours: 5.3,
    costPerWatt: 60, // installed ₹/W
    panelWatt: 545,
    incentivePct: 20,
    incentiveLabel: "PM Surya Ghar subsidy (up to ₹78,000 for 3 kW+)",
    priceNote: "1 kW from ~₹60,000 before subsidy; 3 kW gets up to ₹78,000 back.",
  },
  australia: {
    key: "australia",
    name: "Australia",
    currency: "AUD",
    symbol: "A$",
    locale: "en-AU",
    rate: 0.33, // A$/kWh
    sunHours: 4.8,
    costPerWatt: 1.05, // installed A$/W
    panelWatt: 440,
    incentivePct: 30,
    incentiveLabel: "Small-scale Technology Certificates (STCs), ~30% off",
    priceNote: "STCs typically cut ~30% off the sticker price of a system.",
  },
  pakistan: {
    key: "pakistan",
    name: "Pakistan",
    currency: "PKR",
    symbol: "Rs ",
    locale: "en-PK",
    rate: 60, // Rs/kWh
    sunHours: 5.4,
    costPerWatt: 150, // installed Rs/W
    panelWatt: 585,
    incentivePct: 0,
    incentiveLabel: "Net metering (sell surplus back to the grid)",
    priceNote: "On-grid installs run ~Rs 140–160 per watt in 2026.",
  },
  philippines: {
    key: "philippines",
    name: "Philippines",
    currency: "PHP",
    symbol: "₱",
    locale: "en-PH",
    rate: 12, // ₱/kWh
    sunHours: 4.7,
    costPerWatt: 75, // installed ₱/W
    panelWatt: 550,
    incentivePct: 0,
    incentiveLabel: "Net metering under the DOE DER rules",
    priceNote: "Residential installs run ~₱70–90 per watt in 2026.",
  },
};

/** Geometric-series cumulative savings with annual price escalation. */
export function cumulativeSavings(annual, escalationPct, years) {
  const g = escalationPct / 100;
  if (!annual || annual <= 0) return 0;
  if (g === 0) return annual * years;
  return (annual * (Math.pow(1 + g, years) - 1)) / g;
}

/**
 * Size a grid-tied system from the monthly bill.
 * Returns system size, panel count, roof area, costs, savings and payback.
 */
export function sizeSystem({
  monthlyBill,
  rate,
  sunHours,
  costPerWatt,
  panelWatt,
  incentivePct,
}) {
  const perfRatio = 0.78; // inverter + soiling + temperature losses
  const monthlyKwh = rate > 0 ? monthlyBill / rate : 0;
  const dailyKwh = monthlyKwh / 30;
  const rawKw = sunHours > 0 ? dailyKwh / (sunHours * perfRatio) : 0;
  const panels = Math.max(1, Math.ceil((rawKw * 1000) / panelWatt));
  const actualKw = (panels * panelWatt) / 1000;
  const roofM2 = panels * 2.0; // ~2 m² per residential panel incl. spacing
  const grossCost = actualKw * 1000 * costPerWatt;
  const incentiveAmt = grossCost * (incentivePct / 100);
  const netCost = Math.max(0, grossCost - incentiveAmt);
  const annualKwh = actualKw * sunHours * perfRatio * 365;
  const annualUsageKwh = monthlyKwh * 12;
  const annualSavings = Math.min(annualKwh, annualUsageKwh) * rate;
  const paybackYears = annualSavings > 0 ? netCost / annualSavings : 0;
  const savings25 = cumulativeSavings(annualSavings, 3, 25);
  const co2TonsPerYear = annualKwh * 0.0007; // ~0.7 kg CO₂ per kWh
  return {
    monthlyKwh,
    dailyKwh,
    rawKw,
    panels,
    actualKw,
    roofM2,
    grossCost,
    incentiveAmt,
    netCost,
    annualKwh,
    annualSavings,
    monthlySavings: annualSavings / 12,
    paybackYears,
    savings25,
    co2TonsPerYear,
  };
}

/**
 * Size inverter + battery bank for backup power.
 * batteryType: "lifepo4" (90% usable) or "leadacid" (50% usable).
 */
export function sizeBackup({ loadWatts, backupHours, autonomyDays, batteryType }) {
  const dod = batteryType === "leadacid" ? 0.5 : 0.9;
  const inverterEff = 0.95;
  const inverterKw = (loadWatts * 1.25) / 1000; // 25% headroom for surges
  const batteryKwh =
    (loadWatts * backupHours * autonomyDays) / (dod * inverterEff * 1000);
  const moduleKwh = 5.12; // typical 51.2 V 100 Ah LiFePO₄ module
  const batteries = Math.max(1, Math.ceil(batteryKwh / moduleKwh));
  return {
    inverterKw,
    batteryKwh,
    batteries,
    dailyWh: loadWatts * backupHours,
    dodPct: Math.round(dod * 100),
  };
}

/** Gross/net cost breakdown for a given system size. */
export function costBreakdown({
  systemKw,
  panelWatt,
  costPerWatt,
  batteryAddon,
  creditPct,
}) {
  const panels = Math.max(1, Math.ceil((systemKw * 1000) / panelWatt));
  const actualKw = (panels * panelWatt) / 1000;
  const equipment = actualKw * 1000 * costPerWatt;
  const gross = equipment + batteryAddon;
  const credit = gross * (creditPct / 100);
  const net = Math.max(0, gross - credit);
  return { panels, actualKw, equipment, gross, credit, net };
}
