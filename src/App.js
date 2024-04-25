import React from 'react';
import LoveLetter from './components/LoveLetter/LoveLetter';
import File from './components/LoveLetter/FIle'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoveLetter />} />
          <Route path="/letter" element={<File />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
