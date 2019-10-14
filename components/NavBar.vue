<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item meshgroup-logo" href="https://meshgroup.ru">
        <img src="https://meshgroup.ru/bitrix/templates/meshgroup_ronika/images/logo.png">
      </a>

      <a @click.prevent="openMenu" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div :class="{'is-active': isOpenedMenu}" id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link to="/" class="navbar-item">
          Home
        </nuxt-link>

        <nuxt-link to="/" class="navbar-item">
          Link 2
        </nuxt-link>

        <nuxt-link to="/" class="navbar-item">
          Link 3
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {
                isOpenedMenu: false
            }
        },
        methods: {
            openMenu() {
                this.isOpenedMenu = !this.isOpenedMenu
            }
        }
    }
</script>

<style scoped lang="scss">
  .navbar {
    margin: 1rem .5rem 2rem;
  }
  .meshgroup-logo {
    width: 60px;
    height: 60px;
    background: #ee4c62;
    border-radius: 50%;
    transition: background-color 0.5s ease-out;
    & img {
      width: 60px;
      height: 60px;
    }
  }
  .navbar-brand {
    margin-right: .5rem;

    & a.navbar-item.meshgroup-logo:hover {
      background-color: #902692;
    }
  }
  .navbar-item img {
     max-height: none;
   }
</style>
