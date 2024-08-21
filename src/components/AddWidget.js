// AddWidget.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../utils/widgetsSlice';
import './AddWidget.css';

const AddWidget = ({ categoryName }) => {
  const dispatch = useDispatch();
  const [widgetName, setWidgetName] = useState('');
  const [widgetContent, setWidgetContent] = useState('');

  const handleSubmit = () => {
    if (widgetName && widgetContent) {
      dispatch(
        addWidget({
          categoryName,
          widget: { name: widgetName, content: widgetContent },
        })
      );
      setWidgetName('');
      setWidgetContent('');
    }
  };

  return (
    <div className="add-widget">
      <h3>Add Widget to {categoryName}</h3>
      <input
        type="text"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
        placeholder="Widget Name"
      />
      <input
        type="text"
        value={widgetContent}
        onChange={(e) => setWidgetContent(e.target.value)}
        placeholder="Widget Content"
      />
      <button onClick={handleSubmit}>Add Widget</button>
    </div>
  );
};

export default AddWidget;
