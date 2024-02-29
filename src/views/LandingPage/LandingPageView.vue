<script setup lang="ts">
import ShopLayout from "../../layout/ShopLayout.vue"
import Temp from "./LandingPageTemp.vue"
</script>

<template>
  <ShopLayout id="main" class="temp" :forceCallProducts="false">
    <Temp />
  </ShopLayout>
</template>
