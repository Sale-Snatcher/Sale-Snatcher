import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Sellers from './Sellers';
import Buyers from './Buyers';
import NavBar from './NavBar';
import '../styles.css'




const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />  
        <Route path="/sellers" element={<Sellers />} /> 
        <Route path="/buyers" element={<Buyers />}/> 
      </Routes>
    </Router>
  )
};

// BrowserRouter component handles routing by storing the routing context in the browser URL and implements backward/forward navigation -- the App component needs to be wrapped in browser router (done in index.js in this case, can also be done here if you wrap Routes component in BrowserRouter component)

// routes wraps all routes you want to define -- anything outside of the Routes section doesn't re-render -- the whole page doesnt refresh, just whatever is wrapped in your routes

// route defines your routes (path to diff page on website) -- whatever is passed as the value of the attribute component gets rendered when you follow the path

// Link components give the navigation --- replaces anchor tags, swaps things out without refreshing your entire application -- to replaces the href

export default App;