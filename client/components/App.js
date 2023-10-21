import React from 'react';
import {Route, Routes} from 'react-router-dom';


const App = () => {
  return (
    <>
        <div>
        <h1>hello world</h1>
        </div>
        
        <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/about' element={<About />} />
        </Routes>
    </>
  )
};


export default App;