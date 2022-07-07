import React, { useContext } from "react";
import Transactions from "./Transactions";
import { GlobalContext } from "../Context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.length > 0
          ? transactions.map((transaction) => {
              return (
                <Transactions key={transaction.id} transaction={transaction} />
              );
            })
          : "Nothing To show"}
      </ul>
    </>
  );
};
