import React from "react";

function Header({ setIsAdding }) {
  return (
    <header>
      
        <h1 style={{ color: "blue" }}>Employee Management </h1>
        <h2 style={{ color: "blue" }}>Employee List</h2>
        <div style={{ marginTop: "30px", marginBottom: "18px" }}>
          <button onClick={() => setIsAdding(true)} className="round-button">
            Add Button
          </button>
        </div>
      
    </header>
  );
}

export default Header;
