import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Index from "./pages/index";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} /> {/* catches all unmatched routes */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
