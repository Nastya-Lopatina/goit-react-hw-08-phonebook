import axios from "axios";
import {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError,
  } from './auth-actions';

  axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

 export const token = {
      set(token){
          axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      },
      unset() {
        axios.defaults.headers.common.Authorization = '';
      },

  }