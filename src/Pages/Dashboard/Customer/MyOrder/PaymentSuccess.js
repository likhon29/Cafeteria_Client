import React from "react";
import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const transactionId = query.get("transactionID");
  return (
    <div>
      <h1 className="text-3xl">{transactionId}</h1>
    </div>
  );
};

export default PaymentSuccess;
