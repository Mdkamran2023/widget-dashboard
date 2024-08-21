// widgetsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const widgetsSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    addWidget: (state, action) => {
      const { categoryName, widget } = action.payload;
      const category = state.categories.find(
        (cat) => cat.name === categoryName
      );
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryName, widgetName } = action.payload;
      const category = state.categories.find(
        (cat) => cat.name === categoryName
      );
      if (category) {
        category.widgets = category.widgets.filter(
          (widget) => widget.name !== widgetName
        );
      }
    },
    addCategory: (state, action) => {
      const { name } = action.payload;
      state.categories.push({ name, widgets: [] });
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter(
        (category) => category.name !== action.payload
      );
    }
  },
});

export const { setCategories, addWidget, removeWidget, addCategory, removeCategory } = widgetsSlice.actions;

export default widgetsSlice.reducer;
