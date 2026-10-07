"use client";

import { useMemo, useState } from "react";
import { F, SelectF, ResultHead, Row, TotalRow, ResultNote, num } from "./Fields";
import { COUNTRIES, costBreakdown } from "../lib/solar";
import { fmtNum, fmtMoney } from "../lib/format";

const COUNTRY_OPTIONS = Object.values(COUNTRIES).map((c) => ({
  value: c.key,
  label: `${c.name} (${c.currency})`,
}));

export default function SolarCostCalculator() {
  const [countryKey, setCountryKey] = useState("usa");
  const preset = COUNTRIES[countryKey];

  const [systemKw, setSystemKw] = useState("6");
  const [panelWatt, setPanelWatt] = useState(String(COUNTRIES.usa.panelWatt));
  const [costPerWatt, setCostPerWatt] = useState(String(COUNTRIES.usa.costPerWatt));
  const [batteryAddon, setBatteryAddon] = useState("0");
  const [creditPct, setCreditPct] = useState(String(COUNTRIES.usa.incentivePct));

  const changeCountry = (key) => {
    const p = COUNTRIES[key];
    setCountryKey(key);
    setPanelWatt(String(p.panelWatt));
    setCostPerWatt(String(p.costPerWatt));
    setCreditPct(String(p.incentivePct));
  };

  const r = useMemo(() => {
    return costBreakdown({
      systemKw: num(systemKw),
      panelWatt: num(panelWatt, preset.panelWatt),
      costPerWatt: num(costPerWatt),
      batteryAddon: num(batteryAddon),
      creditPct: num(creditPct),
    });
  }, [systemKw, panelWatt, costPerWatt, batteryAddon, creditPct, preset]);

  const money = (n, digits = 0) => fmtMoney(n, preset, digits);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>System and pricing</h3>
        <SelectF
          label="Currency / country"
          value={countryKey}
          set={changeCountry}
          options={COUNTRY_OPTIONS}
          hint="Switching resets cost-per-watt, panel wattage and credit to that country's presets."
        />
        <div className="field-row">
          <F
            label="System size (kW)"
            value={systemKw}
            set={setSystemKw}
            hint="Typical home: 4–10 kW."
          />
          <F
            label="Panel wattage (W)"
            value={panelWatt}
            set={setPanelWatt}
            hint="Panel count is rounded up to cover the target size."
          />
        </div>
        <div className="field-row">
          <F
            label={`Cost per watt (${preset.currency})`}
            value={costPerWatt}
            set={setCostPerWatt}
            hint={preset.priceNote}
          />
          <F
            label={`Battery storage add-on (${preset.currency})`}
            value={batteryAddon}
            set={setBatteryAddon}
            hint="0 for a grid-tie system with no batteries."
          />
        </div>
        <div className="field-row">
          <F
            label="Tax credit / incentive (%)"
            value={creditPct}
            set={setCreditPct}
            hint={preset.incentiveLabel}
          />
        </div>
      </div>

      <div className="result-card">
        <ResultHead>Results</ResultHead>
        <TotalRow label="Actual system size" value={`${fmtNum(r.actualKw)} kW`} />
        <Row label="Panels needed" value={r.panels.toLocaleString("en-US")} />
        <Row label="Equipment cost" value={money(r.equipment)} />
        <Row label="Battery add-on" value={money(num(batteryAddon))} />
        <Row label="Gross cost" value={money(r.gross)} />
        <Row
          label={`Credit (${fmtNum(num(creditPct), 0)}%)`}
          value={`−${money(r.credit)}`}
        />
        <TotalRow label="Net cost after credit" value={money(r.net)} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            Cost per watt is all-in: panels, inverter, racking, wiring, labor
            and permits. The actual size is rounded up from whole panels, so
            the gross reflects what an installer quotes, not raw math.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}
