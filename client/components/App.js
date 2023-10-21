import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Seller } from './Seller';
import { NotFound } from './NotFound';

console.log('hi');
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/seller' element={<Seller />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
