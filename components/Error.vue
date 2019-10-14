<template>
  <div class="notification is-danger">
    <button class="delete" @click="close"></button>
    {{text}}
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "Error",
        methods: {
            close() {
              this.$store.dispatch('errors/unsetError')
            }
        },
        computed: {
            ...mapGetters({
                text: 'errors/text'
            })
        }
    }
</script>

<style scoped>
    .notification{
        position: fixed;
        top: 20px;
        z-index: 999;
        right: 20px;
    }
</style>
