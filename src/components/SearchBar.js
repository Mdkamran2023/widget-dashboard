// SearchBar.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './SearchBar.css';

const SearchBar = ({ setFilteredCategories }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const categories = useSelector((state) => state.widgets.categories);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter categories based on the search term
    const filtered = categories.map((category) => ({
      ...category,
      widgets: category.widgets.filter((widget) =>
        widget.name.toLowerCase().includes(term)
      ),
    })).filter(category => category.widgets.length > 0);

    setFilteredCategories(filtered);
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearch}
      placeholder="Search widgets..."
      className="search-bar"
    />
  );
};

export default SearchBar;
