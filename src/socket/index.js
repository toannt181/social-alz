import { io } from "socket.io-client";
import { BASE_SOCKET_URL } from "../api/Hashtag";

const socket = io(BASE_SOCKET_URL, {
  path: "/notification"
});

const Socket = {};

Socket.install = function(Vue) {
  Vue.config.globalProperties.$socket = socket;
};

export default Socket;
