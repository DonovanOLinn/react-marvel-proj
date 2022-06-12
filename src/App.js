import './css/App.css';
import Navbar from './components/navbar';
import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Home from './views/Home';
import Shop from './views/Shop';
import Login from './views/Login';
import Cart from './views/Cart';
function App() {

  return (
    <React.Fragment>
      <Navbar />
      <div className="App">
      </div>
      <Routes>
        <Route children path='/' element = {<Home />} />
        <Route children path='/shop' element={<Shop />} />
        <Route children path='/login' element={<Login />}/>
        <Route children path='/cart' element={<Cart />}/>
      </Routes>
  </React.Fragment>);
}

export default App;
