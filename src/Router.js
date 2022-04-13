import { Home,Login,Register} from 'Components/Pages';
import React from 'react'
import {Route,Routes} from 'react-router-dom';

const MainRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
    </Routes>
  )
}

export default MainRouter