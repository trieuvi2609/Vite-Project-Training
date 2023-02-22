import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  const isLogged = localStorage.getItem('accessToken');
  return isLogged ? <Navigate to="/dashboard" /> : <Outlet />;
};
