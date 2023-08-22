import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';

//can use "rafce" syntax to automatically create React arrow function export component
const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px"}}} m="auto">
        {/* the sx prop in used for MUI */}
        {/* the m refer to the margin, MUI allow the use of m in Box component */}
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} /> {/* id means that the path will be dynamic */}
        </Routes>
        <Footer />
    </Box>
  )
}

export default App;