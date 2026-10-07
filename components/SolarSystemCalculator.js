"use client";

import { useMemo, useState } from "react";
import { F, SelectF, ResultHead, Row, TotalRow, ResultNote, num } from "./Fields";
import { sizeBackup } from "../lib/solar";
import { fmtNum } from "../lib/format";

export default function SolarSystemCalculator() {
  const [loadWatts, setLoadWatts] = useState("1500");
  const [backupHours, setBackupHours] = useState("6");
  const [autonomyDays, setAutonomyDays] = useState("1");
  const [batteryType, setBatteryType] = useState("lifepo4");

  const r = useMemo(() => {
    return sizeBackup({
      loadWatts: num(loadWatts),
      backupHours: num(backupHours),
      autonomyDays: num(autonomyDays),
      batteryType,
    });
  }, [loadWatts, backupHours, autonomyDays, batteryType]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Backup loads</h3>
        <div className="field-row">
          <F
            label="Total backup load (watts)"
            value={loadWatts}
            set={setLoadWatts}
            hint="Add up the essentials: fridge, lights, fans, Wi-Fi, chargers."
          />
          <F
            label="Backup hours per day"
            value={backupHours}
            set={setBackupHours}
            hint="How many hours of outage you want to ride through."
          />
        </div>
        <div className="field-row">
          <F
            label="Days of autonomy"
            value={autonomyDays}
            set={setAutonomyDays}
            hint="1 day is standard. Cloudy stretches need more."
          />
          <SelectF
            label="Battery type"
            value={batteryType}
            set={setBatteryType}
            options={[
              { value: "lifepo4", label: "Lithium (LiFePO₄)" },
              { value: "leadacid", label: "Lead-acid / AGM" },
            ]}
            hint="LiFePO₄ costs more upfront but lasts far longer."
          />
        </div>
      </div>

      <div className="result-card">
        <ResultHead>Results</ResultHead>
        <TotalRow label="Recommended inverter" value={`${fmtNum(r.inverterKw)} kW`} />
        <Row label="Battery storage" value={`${fmtNum(r.batteryKwh, 1)} kWh`} />
        <Row label="Battery modules (5.12 kWh each)" value={r.batteries.toLocaleString("en-US")} />
        <Row label="Daily backup energy" value={`${fmtNum(r.dailyWh, 0)} Wh`} />
        <Row label="Usable depth" value={`${r.dodPct}%`} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            The inverter is sized with 25% headroom for motor start-up surges.
            Lithium batteries are counted at 90% usable depth; lead-acid at
            50% — never discharge lead-acid below half or its life collapses.
            Add the panels separately: pair this battery bank with a 2–5 kW
            array for daytime recharging.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}
