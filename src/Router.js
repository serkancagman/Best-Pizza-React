import { Home } from 'Components/Pages';
import React from 'react'
import {Route,Routes} from 'react-router-dom';

const MainRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
    </Routes>
  )
}

export default MainRouter