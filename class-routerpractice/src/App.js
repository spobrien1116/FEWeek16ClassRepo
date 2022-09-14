import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Test1 from '.pages/Test1';
import Test2 from '.pages/Test2';



function App() {
  return (
    <Router>
      <Link to={Home}></Link>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/test1' element={<Test1/>}/>
        <Route path='/test2' element={<Test2/>}/>
      </Routes>
    </Router>  
  );
}

export default App;
