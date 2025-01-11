import { useState } from "react";
import "h8k-components";

import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    if (input === "") return;
    setItems([...items, input]);
    setInput("");
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      padding: "0rem",
      gap: "0.5rem"}}>
      <div
        style={{
          backgroundColor: "#2d2d2d",
          color: "#fff",
          display: "flex",
          alignItems: "center", // Vertically center items
          justifyContent: "center", // Horizontally center items
          padding: "10px 20px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center", // Vertically align elements inside the logo box
            justifyContent: "center",
            width: "40px",
            height: "40px",
            backgroundColor: "#000",
            marginRight: "10px",
            borderRadius: "5px",
          }}
        >
          <span
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            H
          </span>
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#0f0",
              marginLeft: "5px",
            }}
          ></div>
        </div>
        <h1
          style={{
            margin: 0,
            fontSize: "20px",
            color: "#28a745", // Green color
          }}
        >
          Item List Manager
        </h1>
      </div>
      <div className="App">
        <h3>Item List</h3>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter item"
            data-testid="input-field"
          />
          <button onClick={handleAddItem} data-testid="add-button">
            Add Item
          </button>
        </div>
        <ul data-testid="item-list">
          {items.map((item, index) => (
            <li key={index} data-testid="list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
