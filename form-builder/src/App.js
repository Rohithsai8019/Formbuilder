import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateFormPage from './pages/CreateFormPage'; 
import ResponsePage from './pages/ResponsePage'; 

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CreateFormPage />} />
          <Route path="/responses" element={<ResponsePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
