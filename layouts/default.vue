<template>
  <div class="container">
    <app-nav-bar></app-nav-bar>
    <nuxt />
  </div>
</template>

<script>
  import AppNavBar from '@/components/NavBar'
  export default {
      components: {AppNavBar}
  }
</script>

<style>
</style>
