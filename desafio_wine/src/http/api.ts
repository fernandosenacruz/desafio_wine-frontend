import axios from 'axios'

export const Http = axios.create({
  baseURL: 'https://wine-back-test.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json'
  }
})
