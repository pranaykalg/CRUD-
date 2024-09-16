// src/App.js
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast'; // Import Toaster
import Banner from './components/Banner';
import CRUDTable from './components/CRUDTable';
import Footer from './components/Footer';
import Header from './components/Header';
import './styles.css';

const App = () => {
  const [page, setPage] = useState('home');

  return (
    <div>
      <Toaster position="top-center" /> {/* Add Toaster here */}
      <Header setPage={setPage} />
      {page === 'home' && <Banner />}
      {page === 'crud' && <CRUDTable />}
      {page === 'contact' && <Footer />}
    </div>
  );
};

export default App;