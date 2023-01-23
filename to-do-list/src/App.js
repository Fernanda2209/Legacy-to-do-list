import React from 'react';
import './App.css';
import List from './components/List';
import axios from 'axios';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className='todo-todo'>
      <Header></Header>
      <div className="todo-app">
      
      <List />
    </div>
    <Footer></Footer>
    </div>
    
  );
}

export default App;
