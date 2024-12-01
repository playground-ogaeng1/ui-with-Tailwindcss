import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App.tsx';
import Admin from './pages/Admin.tsx';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
);
