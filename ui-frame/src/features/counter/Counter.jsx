"use client";

import { CounterDisplay } from "./CounterDisplay";
import { CounterControlls } from "./CounterControlls";

export function Counter() {
  return (
    <div>
      <CounterDisplay />
      <CounterControlls />
    </div>
  );
}
