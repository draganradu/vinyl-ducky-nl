<script setup lang="ts">
import InternalError from './views/Helpers/InternalErrorView.vue';
import Loading from './views/Helpers/LoadingView.vue';
import Maintenance from './views/Helpers/MaintenanceView.vue';
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import { type isStateApp } from './store/app/types';

// hooks ----------------------------------------
const store = useStore()

// methods --------------------------------------
const isAsString = (isInternal: isStateApp): string => {
  let temp = "no-modal"
  Object.keys(isInternal).forEach((e: string) => {
    if (isInternal[e] === true) {
      console.log(e)
      temp = e
    }

  })
  return temp
}


onMounted(async () => {
  await store.dispatch('app/callControl')
})

// store / props / params -----------------------
const is = computed<isStateApp>(() => store.state['app'].is)

</script>

<template>
  <div id="modal-container" :class="isAsString(is)">
    <Maintenance v-if="is.maintenance" />
    <InternalError v-else-if="is.error" />
    <Loading v-else-if="is.loading" />
  </div>
  <RouterView class="bg-white text-black" />
</template>

<style lang="scss">
.no-modal {
  display: none;
}

#modal-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10vw;

  .modal-inner {
    background-color: white;
    padding: 50px;
    border: 1px solid black;
    position: relative;
  }
}
</style>

