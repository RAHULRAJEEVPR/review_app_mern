import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReviewPage from './pages/ReviewPage';
import './App.css';
import ResultPage from './pages/ResultPage';
import NotfoundPage from './pages/NotfoundPage';
function App() {
  

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReviewPage />} />
        <Route path='/*' element={<NotfoundPage/>}/>
        <Route path="/result/:id" element={<ResultPage/>} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;



