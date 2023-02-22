/* eslint-disable no-undef */
import axios from 'axios';

const handleAxiosError = (error: Error) => {
  console.log(error);
};
export const axiosCaller = (requestType: string) => {
  const token = localStorage.getItem('accessToken') || null;
  // eslint-disable-next-line no-undef
  const Authorization = `Bearer ${token} `; // Request token here
  const axiosHeaders = {
    Type: requestType, // request type
    Authorization, // Token
    'Content-Type': 'application/json',
  };
  const caller = axios.create({
    headers: axiosHeaders,
  });
  caller.interceptors.response.use(
    (response) => response,
    (error) => handleAxiosError(error),
  );
  return caller;
};
