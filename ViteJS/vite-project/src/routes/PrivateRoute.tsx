import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  const isLogged = localStorage.getItem('accessToken');
  return isLogged ? <Outlet /> : <Navigate to="/login" />;
};
