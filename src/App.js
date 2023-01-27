import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Pages from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" key={0} element={<Pages page={'home'}></Pages>} />
        <Route path="/:id" key={1} element={<Pages></Pages>} />
      </Routes>
    </Router>
  );
}

export default App;
