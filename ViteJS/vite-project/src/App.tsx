import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Personal from './components/Personal/Personal';
import Loan from './components/Loan/Loan';
import Occupation from './components/Occupation/Occupation';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/login');
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="personal" element={<Personal />} />
            <Route path="occupation" element={<Occupation />} />
            <Route path="loan" element={<Loan />} />
          </Route>
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
