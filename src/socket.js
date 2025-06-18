import { io } from "socket.io-client";
import { APP_ENV } from "./config";

const { host, port } = APP_ENV;

const URL = host.startsWith("http") ? `${host}:${port}` : `http://${host}:${port}`;

const socket = io(URL, {
  autoConnect: true,
  reconnection: true, // default is true
  reconnectionAttempts: Infinity,
  reconnectionDelay: 1000,
  timeout: 20000, // optional, connection timeout
  transports: ['websocket'], // Optional: force WebSocket for performance
});

export default socket;
