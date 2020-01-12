import React from 'react';
import logo from './logo.svg';
import './App.css';

import TimeList from './components/times-list'
import AddTimeEntryForm from './components/add-time-entry-form'

function App() {
  return (
    <div className="App">
      <h1>App React JS</h1>
      <TimeList/>
      <AddTimeEntryForm/>
    </div>
  );
}

export default App;
