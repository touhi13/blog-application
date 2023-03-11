import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './assets/css/App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Post from './pages/Post';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/:postId' element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
