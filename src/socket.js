import { io } from "socket.io-client";

const URL = "http://192.168.0.105:4000";
const socket = io(URL, { autoConnect: false });

export default socket;