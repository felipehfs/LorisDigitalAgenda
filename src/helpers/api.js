import axios from "axios";
const uri = "http://localhost:8000/api";

export const login = function({ email, password }) {
  return new Promise((resolve, reject) => {
    if (!email || !password) {
        reject("Campos email e senha são requeridos!");
        return
      }
      axios.post(`${uri}/login`, {email, password}).then(resp => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${resp.data.token}`
        resolve(resp.data)
      }).catch(err => reject(err))
  });
};

export const register = function({ email, username, password }) {
  return new Promise((resolve, reject) => {
    if(!email || !username || !password){
      reject("Campos email, username, password são requeridos!")
      return
    }
    axios.post(`${uri}/register`, {email, username, password}).then(resp => {
      resolve(resp)
    }).catch(err => reject(err))
  })
}

export const readAllJournals = async function() {
  const journals = await axios.get(`${uri}/journals`)
  return journals.data
}

export const archiveJournal = async function(id, filed) {
  console.log(!filed)
  const result = await axios.put(`${uri}/journals/${id}`,{ filed: !filed})
  return result.data
}

export const removeJournal = async function(id) {
  const result = await axios.put(`${uri}/journals/${id}`, { removed: true })
  return result.data
}

export const updateJournal = async function(journal) {
  const result = await axios.put(`${uri}/journals/${journal._id}`, {description: journal.description})
  return result.data
}

export const onlyArchiveJournals = async function() {
  const result = await axios.get(`${uri}/journals/archived`)
  return result.data
}

export const newJournal = async function(journal) {
  const result = await axios.post(`${uri}/journals`, journal)
  return result.data
}

export const findById = async function(id) {
  const result = await axios.get(`${uri}/journals/${id}/search`)
  return result.data
}