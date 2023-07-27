// SearchBar.jsx
import React from "react"; // Import React.

const SearchBar = ({ searchTerm, onChange }) => {
  return (
    <div>
      <label htmlFor="search">Search Transactions:</label>
      <input
        type="text"
        id="search"
        value={searchTerm} // Bind the input value to the searchTerm prop.
        onChange={(e) => onChange(e.target.value)} // Call the onChange function when the input changes.
        placeholder="Search by description"
      />
    </div>
  );
};

export default SearchBar; // Export the SearchBar component.