<template>
  <div class="header bg-white">
    <div class="wrapper mx-36 py-7 flex items-center justify-between">
      <div class="header__wrapper flex items-center gap-4">
        <div class="header__icons flex font-semibold items-center">
          <cross-one />
          <cross-two />
          <cross-three />
          <h2 class="header__logo ml-2 text-2xl">XSLAB</h2>
        </div>
        <cross-four />
        <p class="header__title text-gray-400">Программирование</p>
      </div>
      <base-nav :user="user"/>
    </div>
  </div>
</template>

<script>
import CrossOne from '@/assets/img/cross-icon.svg'
import CrossTwo from '@/assets/img/cross-icon-2.svg'
import CrossThree from '@/assets/img/cross-icon-3.svg'
import CrossFour from '@/assets/img/cross-icon-4.svg'
import BaseNav from '@/components/Header/BaseNav.vue'
import { mapState } from 'vuex'

export default {
  components: {
    CrossOne,
    CrossTwo,
    CrossThree,
    CrossFour,
    BaseNav,
  },
  computed: {
    ...mapState(['user'])
  },
}
</script>

<style lang="scss" scoped></style>