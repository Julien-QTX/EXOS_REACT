import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Counter from "./components/page/Counter";
import List from "./components/page/ToDoList";
import UserProfil from "./components/page/UserProfil";
import ListProduits from "./components/page/ListProduits";
import Home from "./components/page/Home";
import './components/assets/App.css';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/Counter" element={<Counter />} />
          <Route path="/ToDoList" element={<List />} />
          <Route path="/UserProfil/:id" element={<UserProfil />} />
          <Route path="/ListProduits" element={<ListProduits />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}