import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
            <Navbar />
            <Routes>
                //@ts-ignore
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </Router>
  );
}

export default App;
