import axios from "axios"

const API = axios.create({
  baseURL: "https://gq-backend.herokuapp.com/api/v1"
})

export const setDefaultHeaders = (token) => {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const login = async ({ email, password }) => {
  try {
    const response = await API.post("/authenticate", {
      email,
      password,
    });

    if (response.status === 200) {
      setDefaultHeaders(response.data.token);
      console.log(response.data);
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// login({
    
//   "email": "pelle@test.com",
//   "password": "pelle123"
// })