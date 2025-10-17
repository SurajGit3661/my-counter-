import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  toggleTheme,
} from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const history = useSelector((state) => state.counter.history);
  const theme = useSelector((state) => state.counter.theme);
  const dispatch = useDispatch();

  const isDark = theme === "dark";

  return (
    <div
      style={{
        ...styles.container,
        background: isDark
          ? "linear-gradient(135deg, #1e1e1e, #333)"
          : "linear-gradient(135deg, #bef686ff, #757576ff)",
        color: isDark ? "#f0f0f0" : "#fff",
      }}
    >
      <h1>My Counter web appicatiopn</h1>
      <h2>Count: {count}</h2>

      {/* Theme Toggle */}
      <button
        onClick={() => dispatch(toggleTheme())}
        style={{
          ...styles.button,
          background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
        }}
      >
        {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Buttons */}
      <div style={styles.buttonContainer}>
        <button onClick={() => dispatch(increment())} style={styles.button}>
          ➕ Increase
        </button>
        <button onClick={() => dispatch(decrement())} style={styles.button}>
          ➖ Decrease
        </button>
        <button onClick={() => dispatch(reset())} style={styles.resetButton}>
          🔄 Reset
        </button>
      </div>

      {/* History Box */}
      <div style={{ ...styles.historyBox, color: isDark ? "#eee" : "#111" }}>
        <h3 style={{ textAlign: "center" }}>Counter History</h3>
        <div style={styles.historyList}>
          {history.length === 0 ? (
            <p style={{ color: isDark ? "#aaa" : "#555", textAlign: "center" }}>
              No history yet...
            </p>
          ) : (
            history.map((val, index) => (
              <div
                key={index}
                style={{
                  ...styles.historyItem,
                  background: isDark
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(255,255,255,0.15)",
                }}
              >
                <span>#{index + 1}</span>
                <span>→ {val}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const glassStyle = {
  background: "rgba(255, 255, 255, 0.15)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "12px",
};

const styles = {
  container: {
    textAlign: "center",
    minHeight: "100vh",
    padding: "20px",
    transition: "all 0.3s ease",
  },
  buttonContainer: {
    margin: "20px",
  },
  button: {
    ...glassStyle,
    margin: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    color: "#fff",
  },
  resetButton: {
    ...glassStyle,
    margin: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    color: "#fff",
  },
  historyBox: {
    ...glassStyle,
    margin: "30px auto",
    padding: "15px",
    width: "320px",
    maxHeight: "300px",
    overflowY: "auto",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  },
  historyList: {
    marginTop: "10px",
  },
  historyItem: {
    ...glassStyle,
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 12px",
    margin: "8px 0",
    fontSize: "14px",
    fontWeight: "500",
  },
};

export default App;
