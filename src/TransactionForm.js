import React, { useState } from "react"; // Import React and useState hook.

const TransactionForm = ({ onAddTransaction }) => {
    const [date, setDate] = useState(""); // State for storing the date, initial value is an empty string.
    const [description, setDescription] = useState(""); // State for storing the description, initial value is an empty string.
    const [category, setCategory] = useState(""); // State for storing the category, initial value is an empty string.
    const [amount, setAmount] = useState(""); // State for storing the amount, initial value is an empty string.
