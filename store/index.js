import GetCourses from "~/API/Courses/GetCourses"
import AuthService from '@/API/AuthService/AuthService.js'

export const state = () => ({
  user: null,
  courses: null,
  modal: null,
})

export const getters = {

}

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setCourses(state, courses) {
    state.courses = courses
  },
  setModal(state, payload) {
    state.modal = payload
  },
  removeModal(state) {
    state.modal = null;
  }
}

export const actions = {
  async userReg({ commit }, payload) {
    const response = await AuthService.userReg(payload)
    if (response.status === 201) {
      commit('setUser', response.data)
    }
  },
  async userAuth({ commit }, payload) {
    const response = await AuthService.userAuth(payload)
    if (response.status === 201) {
      this.$cookies.set('user', response.data.token)
      commit('setUser', response.data)
    }
    return response
  },
  async getUserToken({ commit }) {
    const token = this.$cookies.get('user')
    const response = await AuthService.hasUserAuth(token)
    if (response.status === 200) {
      commit('setUser', response.data)
    } else {
      console.log(response.data)
    }
    return response
  },
  async getCourses({ commit }) {
    const response = await GetCourses.getCourses()
    if (response.status === 200) {
      commit('setCourses', response.data)
    } else {
      console.log(response.data)
    }
  }
}