<script setup lang="ts">
import ShopLayout from "../../layout/ShopLayout.vue"
</script>
<template>
  <ShopLayout id="main" class="temp">
    <img class="side" src="/logo.svg" />

    <div class="center">
      <div class="mt-5">
        <b>Signs and stickers</b>
      </div>

      <div>
        <img class="img" src="/vinylducky.png" />
      </div>

      <div class="bottom-text">We are currently held up by a new project, if you need to contact us you email us at <a
          href="mailto:yellow@vinylducky.nl">yellow@vinylducky.nl</a> or by phone <a href="tel:0648459980">0648459980</a>.
        We are happy to have a chat.
        <hr />
        <b>KVK:</b> 88701778 <br/>
        <b>VAT:</b> NL004641406B81 <br/>
        <b>IBAN:</b> NL02KNAB0606447458

      </div>
    </div>
  </ShopLayout>
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
    opacity: 0.9;
    z-index: 1;
  }

}
</style>