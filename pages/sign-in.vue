<template>
  <div class="auth bg-gray-100 h-screen">
    <div class="wrapper max-w-3xl bg-white h-full">
      <div class="inner mx-36">
        <base-header />
        <h2 class="inner__title text-6xl">Авторизация
          в личный кабинет</h2>
        <base-socials />
        <sign-in />
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeader from '@/components/Auth/BaseHeader.vue';
import BaseSocials from '~/components/UI/Auth/BaseSocials.vue';
import SignIn from '~/components/Auth/SignInForm.vue';


export default {
  layout: 'empty',
  components: {
    BaseHeader,
    BaseSocials,
    SignIn,
  },
}
</script>

<style lang="scss" scoped></style>