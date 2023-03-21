import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/projects';
import Teams from './pages/work';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Work from './pages/work';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/projects' element={<AnnualReport/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;