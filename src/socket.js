import { io } from "socket.io-client";
import { APP_ENV } from "./config";

const { host, port } = APP_ENV;
const URL = `http://${host}:${port}`;
const socket = io(URL, { autoConnect: false });

export default socket;