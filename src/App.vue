<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import ProductCard from './components/ProductCard.vue'
import { useProductStore } from './stores/ProductStore'
import {useCartStore} from './stores/CartStore'
const productStore=useProductStore()
const cartStore=useCartStore()
productStore.fill()
</script>

<template>
 <div class="container">
 <TheHeader />
 <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
 <ProductCard
  v-for="product in productStore.products"
  :key="product.name"
  :product="product"
  @addToCart="cartStore.addItems($event, product)"
  />
 </ul>
 </div>
 

    <div class="wrapper">
         <nav>
  
        <RouterLink to="/theheader">TheHeader</RouterLink>
        <RouterLink to="/cartwidget">CartWidget</RouterLink>
        <RouterLink to="/appcountinput">AppCountInput</RouterLink>
        <RouterLink to="/appbutton">AppButton</RouterLink>
        <RouterLink to="/appmodaloverlay">AppModalOverlay</RouterLink>
        <RouterLink to="/cartitem">CartItem</RouterLink>

      </nav>
    </div>
  

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
