import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance.js";
import IncomeExpenses from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionsList";
import AddTransactions from "./components/AddTransactions";
import { GlobalProvider } from "./Context/GlobalState";
import "./index.css";
const Index = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransactions />
      </div>
    </GlobalProvider>
  );
};

export default Index;
