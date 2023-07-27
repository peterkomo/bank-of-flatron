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