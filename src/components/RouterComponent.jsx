import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Favorites from '../views/Favorites';

const RouterComponent = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
    </Routes>
);

export default RouterComponent;
