"use client";

import { useMemo, useState } from "react";
import { F, SelectF, ResultHead, Row, TotalRow, ResultNote, num } from "./Fields";
import { COUNTRIES, cumulativeSavings } from "../lib/solar";
import { fmtNum, fmtMoney } from "../lib/format";

const COUNTRY_OPTIONS = Object.values(COUNTRIES).map((c) => ({
  value: c.key,
  label: `${c.name} (${c.currency})`,
}));

const MILESTONES = [5, 10, 15, 20, 25];

export default function SolarRoiCalculator() {
  const [countryKey, setCountryKey] = useState("usa");
  const preset = COUNTRIES[countryKey];

  const [systemCost, setSystemCost] = useState("12000");
  const [monthlySavings, setMonthlySavings] = useState("150");
  const [escalation, setEscalation] = useState("3");

  const r = useMemo(() => {
    const cost = num(systemCost);
    const annual = num(monthlySavings) * 12;
    const esc = num(escalation);
    const savings25 = cumulativeSavings(annual, esc, 25);
    const payback = annual > 0 ? cost / annual : 0;
    const milestones = MILESTONES.map((y) => ({
      year: y,
      savings: cumulativeSavings(annual, esc, y),
    }));
    return { cost, annual, savings25, payback, milestones };
  }, [systemCost, monthlySavings, escalation]);

  const money = (n, digits = 0) => fmtMoney(n, preset, digits);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Your investment</h3>
        <SelectF
          label="Currency / country"
          value={countryKey}
          set={setCountryKey}
          options={COUNTRY_OPTIONS}
        />
        <div className="field-row">
          <F
            label={`Total system cost after incentives (${preset.currency})`}
            value={systemCost}
            set={setSystemCost}
            hint="Net price after tax credits or subsidies — see the cost calculator."
          />
          <F
            label={`Monthly bill savings (${preset.currency})`}
            value={monthlySavings}
            set={setMonthlySavings}
            hint="What the system wipes off your average bill."
          />
        </div>
        <div className="field-row">
          <F
            label="Annual energy price increase (%)"
            value={escalation}
            set={setEscalation}
            hint="3% is a common planning figure; utilities often outpace it."
          />
        </div>
      </div>

      <div className="result-card">
        <ResultHead>Results</ResultHead>
        <TotalRow label="Payback period" value={`${fmtNum(r.payback, 1)} years`} />
        <Row label="25-year cumulative savings" value={money(r.savings25)} />
        <Row label="Net profit after payback" value={money(r.savings25 - r.cost)} />
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
          Savings milestones
        </div>
        {r.milestones.map((m) => (
          <Row
            key={m.year}
            label={`Year ${m.year}`}
            value={money(m.savings)}
          />
        ))}
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            Payback is the simple years-to-breakeven on the net cost. The
            milestones compound your first-year savings at the annual price
            increase, which is why the back half of a panel&apos;s 25-year
            life does most of the earning.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}
