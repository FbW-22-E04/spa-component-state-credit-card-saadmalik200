import React from "react";
import CreditCard from "./CreditCard";

function App() {
  const bankName = "Big Bank, Inc.";
  const year = "08/19";
  const name = "SAAD MALIK";

  const creditNum = {
    p1: 1234,
    p2: 5678,
    p3: 8765,
    p4: 4321,
  };

  return (
    <div className="App">
      <CreditCard
        bankName={bankName}
        expiryDate={year}
        personName={name}
        num={creditNum}
      />
    </div>
  );
}

export default App;
