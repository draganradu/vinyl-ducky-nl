<script setup lang="ts">
import ShopLayout from "../layout/ShopLayout.vue"
import SocialIcons from '../components/SocialIcons.vue'

</script>

<template>
  <ShopLayout id="main" class="temp" :forceCallProducts="true" :fluid="true">
    <div class="row text-start">
      <div class="offset-lg-4 col-lg-4">
        <h6 class="h6">Happy to talk</h6>
        <h1 class="mb-5 display-1">Hi</h1>
        <p>We'd love to hear from you. Whether you have a question, feedback, or just want to say hello, we're here and
          ready to help.
        </p>
        <p>
          Feel free to reach out to us using the form below or connect with us via email or phone. We're committed to
          providing you with the best possible experience.
        </p>
        <p>
          We look forward to connecting with you!
        </p>
        <hr class="mt-5" />
        <SocialIcons hide=""/>
        <hr />
      </div>
    </div>
  </ShopLayout>
</template>
