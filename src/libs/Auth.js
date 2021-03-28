import axios from "axios";

const ACCESS_TOKEN = "access_token"
const REFRESH_TOKEN = "refresh_token"

export default class authService {
  init = () => {
    this.setInterceptors();
  };

  setInterceptors = () => {
    axios.defaults.headers.common["X-Access-Token"] = localStorage.getItem(ACCESS_TOKEN);
  };
}

export function isLoggedIn() {
  return localStorage.getItem(ACCESS_TOKEN) !== null
}

export function login(tokens) {
  localStorage.setItem(ACCESS_TOKEN, tokens.access_token)
  localStorage.setItem(REFRESH_TOKEN, tokens.refresh_token)
}

export function logout() {
  localStorage.removeItem(ACCESS_TOKEN)
  localStorage.removeItem(REFRESH_TOKEN)
}
