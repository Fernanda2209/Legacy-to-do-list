import React from 'react';
import './App.css';
import List from './components/List';
import axios from 'axios';

function App() {
  return (
    <div className="todo-app">
      <List />
    </div>
  );
}

export default App;
