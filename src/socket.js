import { io } from "socket.io-client";
import { APP_ENV } from "./config";

const socket = io(APP_ENV.socketUrl, {
  autoConnect: true,
  reconnection: true, // default is true
  reconnectionAttempts: Infinity,
  reconnectionDelay: 1000,
  timeout: 20000, // optional, connection timeout
  transports: ['websocket'], // Optional: force WebSocket for performance
});

socket.on('connect_error', (err) => {
  console.error('Socket connection failed:', err.message);
});

export default socket;
