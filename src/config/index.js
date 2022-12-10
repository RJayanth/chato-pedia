const BASE_URL = window.location.href;
const APP_ENV = BASE_URL.includes('localhost')
  ? {
      host: 'localhost',
      port: '4000',
    }
  : {
      host: 'chatopedia.com',
      port: '80',
    };
export { APP_ENV };
