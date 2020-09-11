import React from "react";
import Checklist from "./Checklist";
import "./style.css";

export default function App() {
  return (
    <div className="container shadow-lg">
      <h1>Check list</h1>
      <Checklist />
    </div>
  );
}
