import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import ApplicationForm from './ApplicationForm.tsx';
import CardDetails from './CardDetails.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/apply" element={<ApplicationForm />} />
        <Route path="/card-details" element={<CardDetails />} />
      </Routes>
    </Router>
  </StrictMode>
);