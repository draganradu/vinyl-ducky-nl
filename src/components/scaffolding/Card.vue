<script setup lang="ts">
defineProps<{
  img?: string
  title?: string
  text?: string
  transparent?: boolean
  sansPadding?: boolean
}>()
</script>

<template>
  <div :class="['overflow-hidden rounded-4', transparent ? '' : 'card shadow']">
    <div v-if="img" class="bg-secondary bg-opacity-25">
      <!-- <img class="card-img-top" src="@/assets/placeholder.png" alt="Card image cap"> -->
    </div>
    <div :class="['card-body', !sansPadding ? 'p-5' : 'sans-padding']">
      <h5 v-if="title" class="card-title">{{ title }}</h5>
      <slot />

      <p v-if="text" class="card-text">{{ text }}</p>
    </div>
  </div>
</template>

<style lang="scss">
.sans-padding {
  padding: 0;
}
</style>