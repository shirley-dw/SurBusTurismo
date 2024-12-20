import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./Screens/home.jsx";
import Service from "./Pages/Service/Service.jsx";
import TestimonialsPage from './Screens/testimonials.jsx';

const App = () => (
   
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:id" element={<Service />} />
            <Route path="/testimonials" element={<TestimonialsPage />} /> 
        </Routes>
   
);

export default App;
