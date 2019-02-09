export const state = () => ({
  showPwdProjects: false
})

export const mutations = {
  toggleProjects: (state) => {
    state.showPwdProjects = !state.showPwdProjects
  },
  setProjects: (state, status) => {
    if (status) {
      state.showPwdProjects = true
    } else {
      state.showPwdProjects = false
    }
  }
}

export const getters = {
  showPwdProjects: state => {
    return state.showPwdProjects
  }
}