import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/Signup';
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>  
          <Route path='/login' element={<Login/>}></Route>  
          <Route path='/signup' element={<Signup/>}></Route>  
        </Routes>
      </Router>
      {/* <Home></Home> */}
    </div>
  );
}

export default App;
