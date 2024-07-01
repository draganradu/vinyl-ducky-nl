<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

// hooks ----------------------------------------
const store = useStore()

// methods --------------------------------------
const iconSelector = (e: string) => {
  const listIcons = {
    "git": "bi-github",
    "instagram": "bi-instagram",
    "behance": "bi-behance",
    "linkedin": "bi-linkedin",
    "youtube": "bi-youtube",
    "whatsapp": "bi-whatsapp",
    "jira": "bi-grid-1x2",
    "default": "bi-balloon-heart",
  }

  if (Object.keys(listIcons).indexOf(e) > -1) {
    return listIcons[e]
  }

  return listIcons['default']
}

const showRule = (e: string) => {
  if (props.hide && e[0] === props.hide) {
    return false
  }
  return true
}

// store / props / params -----------------------
const props = defineProps<{
  hide?: string
}>()

const Icons = computed<{ [key: string]: string }>(() => store.state['app'].socialMedia)
</script>

<template>
  <div class="text-center">
    <span v-for="(i, k) in Icons" :key="k" class="icon" v-show="showRule(k as string)">
      <a target="_blank" :href="i" :title="k.toLocaleString().replace(/[^a-z']/g, '')">
        <i :class="['bi', iconSelector(k.toString().replace(/[^a-z']/g, ''))]"></i>
      </a>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.icon+.icon {
  display: inline-block;
  padding-left: 10px;
}
</style>