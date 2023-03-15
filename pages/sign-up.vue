<template>
  <div class="reg bg-gray-100 h-screen">
    <div class="wrapper max-w-3xl bg-white h-full">
      <div class="inner mx-36">
        <base-header />
        <h2 class="inner__title text-6xl">Регистрация
          в личный кабинет</h2>
        <base-socials />
        <sign-up />
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeader from '@/components/Auth/BaseHeader.vue';
import BaseSocials from '~/components/UI/Auth/BaseSocials.vue';
import SignUp from '~/components/Auth/SignUpForm.vue';

export default {
  layout: 'empty',
  components: {
    BaseHeader,
    BaseSocials,
    SignUp,
  },
}
</script>

<style lang="scss" scoped></style>