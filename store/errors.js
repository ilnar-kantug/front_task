export const state = () => ({
  hasError: false,
  errorText: null
})

export const mutations = {
  SET_HAS_ERROR(state, bool) {
    state.hasError = bool
  },
  SET_ERROR_TEXT(state, text) {
    state.errorText = text
  }
}

export const actions = {
  setError({ commit }, text) {
    commit('SET_ERROR_TEXT', text)
    commit('SET_HAS_ERROR', true)
  },
  unsetError({ commit }) {
    commit('SET_ERROR_TEXT', null)
    commit('SET_HAS_ERROR', false)
  },
}

export const getters = {
  text (state) {
    return state.errorText
  },
  hasError (state) {
    return state.hasError
  }
}
