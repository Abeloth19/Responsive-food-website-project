import React from 'react'
import Navbar from './components/navbar'
import Head from './components/head'
import Cards from './components/cards'
import Foods from './components/foods'
import Category from './components/category'

function App() {
  return (
    <div>
        <Navbar />
        <Head />
        <Cards />
        <Foods />
        <Category />
    </div>
  );
}

export default App;
