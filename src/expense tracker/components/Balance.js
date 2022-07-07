import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  let total;
  return (
    <div>
      {transactions.length > 0
        ? (total = amounts.reduce((acc, item) => (acc += item)).toFixed(2))
        : ""}
      <h4>Your Balance</h4>
      <h1 id="balance"> ${total} </h1>
    </div>
  );
};

export default Balance;
