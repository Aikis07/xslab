import axios from "axios"

class UserReg {
  UserReg(userData) {
    console.log(userData.name)
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
    
  }
}

export default new UserReg()