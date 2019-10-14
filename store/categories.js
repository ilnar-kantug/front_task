export const state = () => ({
  categories: [],
  products: []
})

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_PRODUCTS(state, products) {
    state.products = products
  }
}

export const actions = {
  async fetchCategories({ commit }) {
    const data = await this.$axios.$get('/categories')
    commit('SET_CATEGORIES', data.data)
  },
  async fetchProducts({ commit }, slug) {
    const data = await this.$axios.$get(`/categories/${slug}/products`)
    commit('SET_PRODUCTS', data.data)
  },
}

export const getters = {
  list (state) {
    return state.categories
  },
  products (state) {
    return state.products
  },
}
