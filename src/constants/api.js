import axios from "axios";

const TokenCybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNyIsIkhldEhhblN0cmluZyI6IjIzLzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDgwMDAwMDAwMCIsIm5iZiI6MTY1NzIxMzIwMCwiZXhwIjoxNjg0OTQ3NjAwfQ.uVmhasF9oy0mXFYvSl8tBIUY7ZRmZ-U0hLsBB75mkn8";

const baseURL = `https://fiverrnew.cybersoft.edu.vn/api/`;
export const api = axios.create();
api.interceptors.request.use((config) => {
  config = {
    ...config,
    headers: {
      TokenCybersoft,
      token: JSON.parse(localStorage.getItem("token")),
    },
    baseURL,
  };
  return config;
});
