// Dashboard.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories, addCategory } from '../utils/widgetsSlice';
import Widget from './Widget';
import AddWidget from './AddWidget';
import SearchBar from './SearchBar'; // Ensure SearchBar is imported
import dashboardConfig from '../utils/dashboardConfig.json';
import './Dashboard.css';

const Dashboard = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.widgets.categories);
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [newCategoryName, setNewCategoryName] = useState('');

  useEffect(() => {
    dispatch(setCategories(dashboardConfig.categories));
  }, [dispatch]);

  useEffect(() => {
    setFilteredCategories(categories);
  }, [categories]);

  const handleAddCategory = () => {
    if (newCategoryName) {
      dispatch(addCategory({ name: newCategoryName }));
      setNewCategoryName('');
    }
  };

  return (
    <div className="dashboard-container">
      <SearchBar setFilteredCategories={setFilteredCategories} />
      <div className="add-category-container">
        <input
          type="text"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
          placeholder="New Category Name"
        />
        <button onClick={handleAddCategory}>Add Category</button>
      </div>

      {filteredCategories.map((category) => (
        <div key={category.name} className="category-container">
          <h2 className="category-title">{category.name}</h2>
          <div className="widgets-container">
            {category.widgets.map((widget) => (
              <Widget key={widget.name} categoryName={category.name} widget={widget} />
            ))}
          </div>
          <AddWidget categoryName={category.name} />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
