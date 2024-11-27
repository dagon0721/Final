"use client";

import { useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

export function CounterControlls() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br></br>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
