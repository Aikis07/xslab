import axios from "axios"

export default {
  async userReg(userData) {
    try {
      return axios.post('http://codepeak.ru:7000/auth/register', {
        "name": userData.name,
        "email": userData.email,
        "password": userData.password,
        "phone": userData.phone,
      })
    } catch (error) {
      console.log(error)
    }
  },

  async userAuth(userData) {
    try {
      return axios.post('http://codepeak.ru:7000/auth/login', {
        "email": userData.email,
        "password": userData.password,
      })
    } catch (error) {
      return error
    }
  },

  async hasUserAuth(token) {
    try {  
      return axios.get('http://codepeak.ru:7000/auth/account', {
        headers: {
          Authorization: token !== undefined ? `Bearer ${token}` : null
        }
      })
    } catch (error) {
      return error
    }
  }
}
