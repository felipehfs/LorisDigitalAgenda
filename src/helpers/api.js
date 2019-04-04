import axios from "axios";
const uri = "http://localhost:8000/api";

export const login = function({ email, password }) {
  return new Promise((resolve, reject) => {
    if (!email || !password) {
        reject("Campos email e senha são requerido!");
        return
      }
      axios.post(`${uri}/login`, {email, password}).then(resp => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${resp.data.token}`
        resolve(resp.data)
      }).catch(err => reject(err))
  });
};

export const readAllJournals = async function() {
  const journals = await axios.get(`${uri}/journals`)
  return journals.data
}

export const archiveJournal = async function(id) {
  const result = await axios.put(`${uri}/journals/${id}`,{ filed: true})
  return result.data
}

export const removeJournal = async function(id) {
  const result = await axios.put(`${uri}/journals/${id}`, { removed: true })
  return result.data
}

// TODO: returns only the journals archived
export const onlyArchieveJournals = async function() {
  
} 