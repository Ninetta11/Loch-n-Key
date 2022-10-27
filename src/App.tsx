import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        {/* <Route path="menu" element={<Menu />} />
        <Route path="events" element={<Events />} />
        <Route path="reservation" element={<Reservation />} /> */}
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
