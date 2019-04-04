import axios from 'axios'

const success = response => response 

const failure = err => {
    if (err.response.status === 401) {
        window.location = "/login"
        localStorage.removeItem('authToken')
    } else {
        Promise.reject(err)
    }
}

axios.interceptors.response.use(success, failure)