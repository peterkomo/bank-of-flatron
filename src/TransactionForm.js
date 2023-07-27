import React, { useState } from "react"; // Import React and useState hook.

const TransactionForm = ({ onAddTransaction }) => {
    const [date, setDate] = useState(""); // State for storing the date, initial value is an empty string.
    const [description, setDescription] = useState(""); // State for storing the description, initial value is an empty string.
    const [category, setCategory] = useState(""); // State for storing the category, initial value is an empty string.
    const [amount, setAmount] = useState(""); // State for storing the amount, initial value is an empty string.
// Function to handle form submission and add new transaction
const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior.

    const newTransaction = {
        date,
        description,
        category,
        amount: parseFloat(amount), // Convert the amount to a float value.
        id: Date.now(), // Use the current timestamp as the unique ID.
      };
      onAddTransaction(newTransaction); // Call the onAddTransaction prop with the new transaction.

      // Reset form input values to empty strings after adding the transaction
      setDate("");
      setDescription("");
      setCategory("");
      setAmount("");
    };
    return (
        <form onSubmit={handleSubmit}>
          <h2>Add New Transaction</h2>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date} // Bind the input value to the date state.
              onChange={(e) => setDate(e.target.value)} // Call setDate when the input changes.
              required
            />
    
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              value={description} // Bind the input value to the description state.
              onChange={(e) => setDescription(e.target.value)} // Call setDescription when the input changes.
              required
            />
    
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              value={category} // Bind the input value to the category state.
              onChange={(e) => setCategory(e.target.value)} // Call setCategory when the input changes.
              required
            />
    
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              value={amount} // Bind the input value to the amount state.
              onChange={(e) => setAmount(e.target.value)} // Call setAmount when the input changes.
              required
            />
          </div>
          <button type="submit">Add Transaction</button>
        </form>
      );
    };
    