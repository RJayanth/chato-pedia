const BASE_URL = window.location.href;
const APP_ENV = BASE_URL.includes('localhost') || BASE_URL.includes('192.168.0.105')
  ? {
      host: '192.168.0.105',
      port: '4000',
    }
  : {
      host: 'chatopedia.com',
      port: '8080',
    };
export { APP_ENV };
