<script setup lang="ts">
import ShopLayout from "../../layout/ShopLayout.vue"
import Temp from "./LandingPageTemp.vue"
import ProductGrid from "../../components/ProductGrid.vue"
</script>

<template>
  <ShopLayout id="main" class="temp" :forceCallProducts="true" :fluid="true">
    <div class="row">
      <div class="offset-lg-4 col-lg-3">
        <Temp />
      </div>
      <div class="col-lg-4">
        <ProductGrid />
      </div>
    </div>
  </ShopLayout>
</template>
