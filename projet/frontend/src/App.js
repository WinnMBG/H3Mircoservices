import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserList from './pages/UserList';
import Login from './pages/Login'


const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/coup-de-coeur" element={<UserList/>}/>
      <Route path="*" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App