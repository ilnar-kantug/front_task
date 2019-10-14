export default function ({ $axios, store }) {
  $axios.onError(error => {
    if (error.response) {
      store.dispatch('errors/setError', error.response.data.message)
    }
  })
}
