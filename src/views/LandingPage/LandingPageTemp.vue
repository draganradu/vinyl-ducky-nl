<script setup lang="ts">
import { computed } from 'vue';
import { appType } from '../../store/app/types';
import { useStore } from 'vuex';
import SocialIcons from '../../components/SocialIcons.vue'

// 0.1.0 ----------------------------------------
// hooks ----------------------------------------
const store = useStore()
// methods --------------------------------------
// store / props / params -----------------------
const app = computed<appType>(() => store.state['app'])
// events ---------------------------------------
// data -----------------------------------------
// logic ----------------------------------------
</script>

<template>
  <img class="side overflow" src="/logo.svg" />

  <div class="center mb-5">
    <div class="mt-5">
      <b>Signs and stickers</b>
    </div>

    <div>
      <img alt="vinyl ducky logo" class="img" src="/vinylducky.png" />
    </div>

    <div class="bottom-text">
      <p>We are currently held up by a new project, if you need to contact us you email us at <a
          href="mailto:yellow@vinylducky.nl">yellow@vinylducky.nl</a> or by phone <a href="tel:0648459980">0648459980</a>.
        We are happy to have a chat.
      </p>
      <hr />
      <SocialIcons hide="_"/>
      <hr />
      <p class="mb-0" v-for="i in ['KVK', 'VAT', 'IBAN']" :key="i"><b>{{ i }}:</b> {{ app.companyInfo[i] }}</p>
    </div>
  </div>
</template>

<style lang="scss">
.temp {
  text-align: center;
  min-height: 100vh;
  background-color: yellow !important;


  .img {
    margin-top: 2em;
    margin-bottom: 4em;
  }

  .bottom-text {
    max-width: 250px;
    margin: auto;
    text-align: left;

    a {
      color: inherit;
    }
  }

  .center {
    z-index: 1;
    position: relative;
  }

  .side {
    position: fixed;
    height: 100vh;
    left: 0;
    top: 0;
    transform: translateX(-60%);
    opacity: 0.1;
    z-index: 1;
  }
}
</style>