import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

// Load persisted state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) return undefined; // no saved state
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

// Configure store with persisted state
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  preloadedState: loadState(),
});

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
  saveState({
    counter: store.getState().counter,
  });
});
