import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import GreekPage from './GreekPage';
import NorsePage from './NorsePage';
import EgyptianPage from './EgyptianPage';
import GodDetails from './GodDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/greek" element={<GreekPage />} />
        <Route path="/norse" element={<NorsePage />} />
        <Route path="/egyptian" element={<EgyptianPage />} />
        <Route path="/details/:godId" element={<GodDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
