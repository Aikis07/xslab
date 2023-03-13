<template>
  <div class="main bg-black">
    <base-header />
    <Nuxt />
    <base-footer />
  </div>
</template>

<script>
import BaseHeader from '~/components/Header/BaseHeader.vue';
import BaseFooter from '~/components/Footer/BaseFooter.vue';

  export default {
    components: {
      BaseHeader,
      BaseFooter,
    },
  }
</script>

<style lang="scss" scoped>

</style>