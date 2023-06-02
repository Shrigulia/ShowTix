import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';

import './styles/app.scss';
import { Toaster } from 'react-hot-toast';

const App = () => {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/movieDetais/:id' element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
    <Toaster />
    </>
  )
}

export default App