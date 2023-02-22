import { Header } from 'antd/es/layout/layout';

function authToken() {
  // return store.getState().auth.user?.token;
}
function handleData(response: any) {
  const { accessToken, refreshToken } = response;
  console.log(response);
  if (response.accessToken && response.refreshToken) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }
  return response;
}
function handleError(response: any) {
  console.log(response);
}
function authHeader(url: string) {
  return 1;
}
async function request(url: string, method: string, data?: object) {
  // const fetchConfig = (isAuth){
  //   return {
  //     method,
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization:
  //     }
  //   }
  // }
  const accessToken = localStorage.getItem('accessToken');
  const myHeaders = accessToken
    ? new Headers({
        'Content-Type': 'application/json',
        Authentication: `Bearer ${accessToken}`,
      })
    : {
        'Content-Type': 'application/json',
      };

  const response = await fetch(url, {
    method,
    headers: myHeaders,
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const dataJSON = await response.json();
    const dataLoginResponse = handleData(dataJSON);
    return dataLoginResponse;
  }
  handleError(response);
}
export default request;
