import { Home,Login } from 'Components/Pages';
import React from 'react'
import {Route,Routes} from 'react-router-dom';

const MainRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default MainRouter