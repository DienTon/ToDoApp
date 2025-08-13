import './App.css';
import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ToDo from './component/todo';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDo />} />
        {/* Add more routes as needed */}
      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
