import React, { useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserList from './pages/UserList';
import Login from './pages/Login'



const App = () => {
  const [logged, setLogged] = useState(false)
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/coup-de-coeur" element={<UserList/>}/>
      <Route path="*" element={<Home/>}/>
      <Route path="/login" element={<Login logged={logged} setLogged={setLogged}/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App