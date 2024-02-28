import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import LoginForm from './pages/LoginForm';
import Form from './pages/Form';

const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/signup' element={<Form />}/>
        <Route path='/login' element={<LoginForm />}/>
      </Routes>
    </Router>
  </div>;
};

export default App;
