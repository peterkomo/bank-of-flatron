import React from "react";

const TransactionTable = ({ transactions, onDeleteTransaction, onSort }) => {
    return (
      <table className="table ">
        <thead>
          <tr className="table-info">
            <th onClick={() => onSort("date")}>Date</th>
            <th onClick={() => onSort("description")}>Description</th>
            <th onClick={() => onSort("category")}>Category</th>
            <th onClick={() => onSort("amount")}>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="table-success">
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>${transaction.amount}</td>
              <td>
                <button onClick={() => onDeleteTransaction(transaction.id)}>
                  Delete
                </button>
                <button onClick={() => onSort(transaction.id)}>Sort</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default TransactionTable; // Export the TransactionTable component.