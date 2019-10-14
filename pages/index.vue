<template>
  <div>
    <div class="columns is-mobile">
      <div class="column is-one-third-mobile is-one-third-tablet is-one-third-desktop is-one-quarter-fullhd">
        <div class="subtitle is-4">Categories</div>
        <div
          v-for="category in categories"
          :key="category.id"
        >
          <span v-text="drawDelimiter(category.depth)"></span>
          <a
            @click.prevent="openProducts(category)"
          >
            {{category.name}}
          </a>
        </div>
      </div>
      <div class="column">
        <div class="subtitle is-4">Products</div>
        <div class="subtitle is-6">Category: {{activeCategory}}</div>
        <div class="cards">
          <div class="card"
             v-for="product in products"
             :key="product.id"
        >
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="product.image_url">
            </figure>
          </div>
          <header class="card-header">
            <p class="card-header-title">
              {{product.title}}
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              {{product.description | cutter}}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        head() {
            return {
                title: 'Mesh Group Task'
            }
        },
        data() {
            return {
                activeCategory: ''
            }
        },
        async fetch({store}) {
            await store.dispatch('categories/fetchCategories')
        },
        methods: {
            drawDelimiter(depth) {
                return `-`.repeat(depth)
            },
            openProducts(category) {
                this.$store.dispatch('categories/fetchProducts', category.slug)
                this.activeCategory = category.name
            }
        },
        computed: {
            ...mapGetters({
                categories: 'categories/list',
                products: 'categories/products'
            })
        },
        filters: {
            cutter(value) {
                return value === null ? null : value.slice(100) + '...'
            }
        }
    }
</script>

<style scoped lang="scss">
  @import '@/assets/pages/index.scss';
</style>
