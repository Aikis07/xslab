const { default: axios } = require("axios");

class GetCourses {
  async getCourses() {
    try {
      return axios.get('http://codepeak.ru:7000/courses/all')
        .then(response => {
          return response
        })
    } catch (error) {
      return error
    }

  }
}

export default new GetCourses()