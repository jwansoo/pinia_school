<template>
  <div class="relative">
   <span class="cursor-pointer" @click="active=true">
   <fa icon="shopping-cart" size="lg" class="text-gray-700" />
   <div class="cart-count absolute">{{cartStore.count}}</div>
   </span>

   <AppModalOverlay :active="active" @close="active=false">
   <div v-if="!cartStore.isEmpty">
    <ul class="items-in-cart">
    <CartItem
      v-for="(items, name) in cartStore.grouped"
      :key="name"
      :product="items[0]"
      :count="cartStore.groupCount(name)"
      @updateCount="cartStore.setItemCount(item[0], $event)"
      @clear="cartStore.clearItem(name)"
     /> 
    </ul>
    <div class="flex justify-end text-2xl mg-5">
      Total:<strong>${{cartStore.total}}</strong>
    </div>
    <div class="flex justify-end">
      <AppButton class="secondary mr-2" @click="cartStore.$reset()">Clear Cart</AppButton>
      <AppButton class="primary" @click="cartStore.checkout">Checkout</AppButton>
    </div>
   </div>
   <div v-else><em>Cart is Empty</em></div>
   
   </AppModalOverlay>
  </div>
</template>

<script setup>
  import {ref} from 'vue'
  import CartItem from './CartItem.vue'
  import AppModalOverlay from './AppModalOverlay.vue';
  import AppButton from './AppButton.vue';
  import { useCartStore } from '../stores/CartStore';

  const cartStore=useCartStore()
  const active=ref(false)
</script>

<style lang="pcss" scoped>
  .items-in-cart{
    @apply mb-5;
  }
  .items-in-cart li{
    @apply flex justify-between p-2;
  }
  .items-in-cart li:nth-of-type(event){
    @apply bg-gray-300;
  }
</style>