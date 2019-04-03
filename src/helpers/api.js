import axios from "axios";
const uri = "http://localhost:8000/api";

export const login = function({ email, password }) {
  return new Promise((resolve, reject) => {
    if (!email || !password) {
        reject("Campos email e senha são requerido!");
        return
      }
      resolve(axios.post(`${uri}/login`, {email, password}))
  });
};
