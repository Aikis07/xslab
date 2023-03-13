import axios from "axios"

class HasUserAuth {
  async HasUserAuth(token) {
    try {  
      return axios.get('http://codepeak.ru:7000/auth/account', {
        headers: {
          Authorization: token !== undefined ? `Bearer ${token}` : null
        }
      })
        .then(response => {
          return response
        })
    } catch (error) {
      return error
    }
  }
}

export default new HasUserAuth()