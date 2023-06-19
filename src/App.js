import './App.css';
import HomePage from './pages/homePage';
import SearchPage from './pages/searchPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="/search" element={<SearchPage/>}/>
      <Route exact path="/" element={<HomePage/>}/>
    </Routes>
  );
}

export default App;
