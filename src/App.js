import React from 'react'
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import SideMenu from './components/sideMenu/SideMenu';

function App() {
  return (
    <div class="wrapper">
      <Header />
      <SideMenu />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
