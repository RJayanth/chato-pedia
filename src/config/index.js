const BASE_URL = window.location.href;
const APP_ENV =
  BASE_URL.includes('localhost') || BASE_URL.includes(process.env.REACT_APP_SOCKET_SERVER_URL)
    ? {
        host: process.env.REACT_APP_SOCKET_SERVER_URL,
        port: '3001',
      }
    : {
        host: 'chatopedia.com',
        port: '8080',
      };
export { APP_ENV };
