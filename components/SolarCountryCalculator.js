"use client";

import { useMemo, useState } from "react";
import { F, ResultHead, Row, TotalRow, ResultNote, num } from "./Fields";
import { COUNTRIES, sizeSystem } from "../lib/solar";
import { fmtNum, fmtMoney } from "../lib/format";

export default function SolarCountryCalculator({ countryKey }) {
  const preset = COUNTRIES[countryKey];

  const [monthlyBill, setMonthlyBill] = useState("150");
  const [rate, setRate] = useState(String(preset.rate));
  const [sunHours, setSunHours] = useState(String(preset.sunHours));
  const [costPerWatt, setCostPerWatt] = useState(String(preset.costPerWatt));
  const [panelWatt, setPanelWatt] = useState(String(preset.panelWatt));

  const r = useMemo(() => {
    return sizeSystem({
      monthlyBill: num(monthlyBill),
      rate: num(rate),
      sunHours: num(sunHours),
      costPerWatt: num(costPerWatt),
      panelWatt: num(panelWatt, preset.panelWatt),
      incentivePct: preset.incentivePct,
    });
  }, [monthlyBill, rate, sunHours, costPerWatt, panelWatt, preset]);

  const money = (n, digits = 0) => fmtMoney(n, preset, digits);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Your numbers</h3>
        <div className="field-row">
          <F
            label={`Monthly electricity bill (${preset.symbol.trim() || preset.symbol})`}
            value={monthlyBill}
            set={setMonthlyBill}
            hint="Check your latest bill — use your average month."
          />
          <F
            label={`Electricity rate (${preset.currency}/kWh)`}
            value={rate}
            set={setRate}
            hint={preset.priceNote}
          />
        </div>
        <div className="field-row">
          <F
            label="Peak sun hours per day"
            value={sunHours}
            set={setSunHours}
            hint={`National average: ${preset.sunHours} h. Adjust for your roof.`}
          />
          <F
            label="Panel wattage (W)"
            value={panelWatt}
            set={setPanelWatt}
            hint={`Common residential panels here: ~${preset.panelWatt} W.`}
          />
        </div>
        <div className="field-row">
          <F
            label={`Installed cost (${preset.currency}/watt)`}
            value={costPerWatt}
            set={setCostPerWatt}
            hint={preset.priceNote}
          />
        </div>
      </div>

      <div className="result-card">
        <ResultHead>Results</ResultHead>
        <TotalRow label="System size" value={`${fmtNum(r.actualKw)} kW`} />
        <Row label="Panels needed" value={r.panels.toLocaleString("en-US")} />
        <Row label="Roof area" value={`~${fmtNum(r.roofM2, 0)} m²`} />
        <Row label="Annual generation" value={`${fmtNum(r.annualKwh, 0)} kWh`} />
        <div
          style={{
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: ".1em",
            color: "#94a3b8",
            marginTop: 20,
            marginBottom: 8,
          }}
        >
          Cost & incentive
        </div>
        <Row label="Gross cost" value={money(r.grossCost)} />
        <Row label={preset.incentiveLabel} value={`−${money(r.incentiveAmt)}`} />
        <TotalRow label="Net cost after incentive" value={money(r.netCost)} />
        <div
          style={{
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: ".1em",
            color: "#94a3b8",
            marginTop: 20,
            marginBottom: 8,
          }}
        >
          Savings
        </div>
        <Row label="Monthly savings" value={money(r.monthlySavings)} />
        <Row label="Annual savings" value={money(r.annualSavings)} />
        <Row label="Payback period" value={`${fmtNum(r.paybackYears, 1)} years`} />
        <TotalRow label="25-year savings" value={money(r.savings25)} />
        <Row label="CO₂ offset" value={`${fmtNum(r.co2TonsPerYear, 1)} tons/yr`} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            Sized for about 78% real-world output after inverter, soiling and
            heat losses. Savings assume 3% annual electricity price growth and
            that your roof gets close to the national sun-hour average.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}
