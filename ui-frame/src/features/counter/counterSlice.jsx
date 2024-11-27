import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0, // 초기 상태 값 정의
};

const counterSlice = createSlice({
  name: "counter",
  initialState, // 초기 상태
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
