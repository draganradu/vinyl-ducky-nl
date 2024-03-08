<script setup lang="ts">
import ShopLayout from "../../layout/ShopLayout.vue"
import Temp from "./LandingPageTemp.vue"
import ProductGrid from "../../components/ProductGrid.vue"
</script>

<template>
  <ShopLayout id="main" class="temp" :forceCallProducts="true" :fluid="true">
    <div class="row">
      <div class="offset-4 col-md-3">
        <Temp />
      </div>
      <div class="col-md-4">
        <ProductGrid />
      </div>
    </div>
  </ShopLayout>
</template>
