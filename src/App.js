import './App.css';

import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import MainLayout from './components/MainLayout';
import Cover from './pages/Cover';
import DashBoard from './pages/Dashboard';
import Search from './pages/Search';

const App = () => {
  return (
    <div>
      <Router>

 
<Routes>


  
  <Route path='/admin' element={(<MainLayout/>)}> 
  <Route index element={<Cover/>} />
  <Route path="home" element={<DashBoard/>}/>
  <Route path="Search" element={<Search/>}/>
  <Route path="orders" element="BlogCatalist" />
  <Route path="paging" element="BlogCatalist" />
 
 
  </Route>
</Routes>


</Router>
    </div>
  )
}

export default App
