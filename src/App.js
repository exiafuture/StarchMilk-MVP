import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';
import FinishSignIn from './FinishSignIn';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/finishSignIn" element={<FinishSignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
