import React from 'react'
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SideMenu from './components/SideMenu';

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
