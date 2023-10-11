import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReviewPage from './pages/ReviewPage';
import './App.css';
import ResultPage from './pages/ResultPage';
function App() {
  const [count, setCount] = useState(0);

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReviewPage />} />
        <Route path="/result/:id" element={<ResultPage/>} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;



