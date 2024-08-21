// App.js
import React from 'react';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import store from './utils/store';
import Dashboard from './components/Dashboard';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <div className="App">
          <SearchBar />
          <Dashboard />
        </div>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
