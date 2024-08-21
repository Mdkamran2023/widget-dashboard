// Widget.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../utils/widgetsSlice';
import './Widget.css';

const Widget = ({ categoryName, widget }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryName, widgetName: widget.name }));
  };

  return (
    <div className="widget">
      <h3 className="widget-title">{widget.name}</h3>
      <p className="widget-content">{widget.content}</p>
      <button className="remove-button" onClick={handleRemove}>×</button>
    </div>
  );
};

export default Widget;
