// App.jsx
import { useState, useEffect } from "react"; // Import necessary hooks from React.
import SearchBar from "./SearchBar";
import TransactionForm from "./TransactionForm";
import TransactionTable from "./TransactionTable";
const App = () => {
  // State for managing transactions and search term
  const [transactions, setTransactions] = useState([]); // State for storing transactions, initial value is an empty array.
  const [searchTerm, setSearchTerm] = useState(""); // State for storing the search term, initial value is an empty string.

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetch("http://localhost:3000/transactions") // Make a fetch request to the specified URL.
      .then((res) => res.json()) // Convert the response to JSON format.
      .then((data) => setTransactions(data)) // Update the transactions state with the fetched data.
      .catch((error) => console.error("Error fetching data:", error)); // Handle errors if the fetch fails.
  }, []); // The empty dependency array ensures the effect runs only once on mount.

  // Function to add a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]); // Update transactions state by adding the newTransaction to the existing array.
  };

  // Function to delete a transaction by ID
  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    ); // Filter out the transaction with the specified ID.
    setTransactions(updatedTransactions); // Update transactions state with the filtered transactions.
  };

  // Function to sort transactions by a given key
  const sortTransactions = (key) => {
    const sortedTransactions = [...transactions].sort((a, b) => {
      // Create a new sorted array without mutating the original transactions array.
      if (a[key] < b[key]) return -1; // Compare the values based on the key.
      if (a[key] > b[key]) return 1;
      return 0;
    });
    setTransactions(sortedTransactions); // Update transactions state with the sorted array.
  };

  // Filter transactions based on search term
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  ); // Use the filter method to keep only the transactions that match the search term.

  // Function to handle search term change
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm); // Update searchTerm state with the new search term.
  };

  return (
    <div>
      <h1>Flatiron Bank</h1>
      {/* SearchBar component with props */}
      <SearchBar
        searchTerm={searchTerm}
        onChange={handleSearch}
      />
      {/* TransactionTable component with props */}
      <TransactionTable
        transactions={filteredTransactions}
        onDeleteTransaction={deleteTransaction}
        onSort={sortTransactions}
      />
      {/* TransactionForm component with props */}
      <TransactionForm
        onAddTransaction={addTransaction}
      />
    </div>
  );
};

export default App; // Export the App component.
