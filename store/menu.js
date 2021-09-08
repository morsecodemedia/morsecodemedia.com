export const state = () => ({
  showMenu: false
})

export const mutations = {
  toggleMenu: (state) => {
    state.showMenu = !state.showMenu
  },
  setMenu: (state, status) => {
    if (status) {
      state.showMenu = true
    } else {
      state.showMenu = false
    }
  }
}

export const getters = {
  showMenu: state => {
    return state.showMenu
  }
}
