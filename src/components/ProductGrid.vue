<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex'

// hooks ----------------------------------------
const store = useStore()

// store / props / params -----------------------
const products = computed<{ [key: string]: string }>(() => store.state['products'].products)

</script>
<template>
  <div id="grid-img" class="row">
    <div class="box col-md-4" v-for="(i, k) in products" :key="k">
      <div class="inner" :style="`background-image: url('https://vinylducky.nl/product-img/${i.img[0]}')`"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#grid-img {
  position: relative;
  left: 80px;
}

.box {
  height: 200px;
  padding: 2px;

  .inner {
    width: 100%;
    height: 100%;
    filter: grayscale(1);
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply;
    opacity: 0.5;
  }

  &:hover {
    .inner {
      opacity: 1;
      filter: grayscale(0);
    }
  }
}
</style>