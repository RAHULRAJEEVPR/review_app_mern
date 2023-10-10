import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReviewPage from './pages/ReviewPage';
import './App.css';
import ResultPage from './pages/ReviewPage';
function App() {
  const [count, setCount] = useState(0);

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReviewPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
