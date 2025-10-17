import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  history: [],
  theme: "light",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.history.push(state.value);
    },
    decrement: (state) => {
      state.value -= 1;
      state.history.push(state.value);
    },
    reset: (state) => {
      state.value = 0;
      state.history.push(state.value);
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { increment, decrement, reset, toggleTheme } = counterSlice.actions;
export default counterSlice.reducer;
