import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'morsecodemedia',
    storage: window.localStorage
  })(store)
}