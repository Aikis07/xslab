import axios from "axios"

class UserAuth {
  async UserAuth(userData) {
    try {
      return axios.post('http://codepeak.ru:7000/auth/login', {
      "email": userData.email,
      "password": userData.password,
    })
    .then(response => {
      return response
    })
    } catch (error) {
      return error
    }
    
  }
}

export default new UserAuth()