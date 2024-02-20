<script setup lang="ts">
import InternalError from './views/Helpers/InternalErrorView.vue';
import Loading from './views/Helpers/LoadingView.vue';
import Maintenance from './views/Helpers/MaintenanceView.vue';
import { useStore } from 'vuex'
import { computed } from 'vue'
import { type isStateApp } from './store/app/types';

// store / props / params -----------------------
const store = useStore()

// data ---------------------------------------
const is = computed<isStateApp>(() => store.state['app'].is)

</script>

<template>
  <div id="modal-container">
    <Maintenance v-if="is.maintenance" />
    <InternalError v-else-if="is.error" />
    <Loading v-else-if="is.loading" />
  </div>
  <RouterView class="bg-white text-black" />
</template>

