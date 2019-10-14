<template>
  <div class="container is-fluid">
    <app-nav-bar />
    <nuxt />
    <app-error v-if="hasError"/>
  </div>
</template>

<script>
  import AppNavBar from '@/components/NavBar'
  import AppError from '@/components/Error'
  import {mapGetters} from 'vuex'
  export default {
      components: {AppNavBar, AppError},
      computed: {
          ...mapGetters({
              hasError: 'errors/hasError'
          })
      }
  }
</script>

<style scoped>
  @media (max-width: 1025px) {
    .container {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
</style>
