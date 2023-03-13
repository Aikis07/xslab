<template>
  <div class="header py-7">
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
  </div>
</template>

<script>
import CrossOne from '@/assets/img/cross-icon.svg'
import CrossTwo from '@/assets/img/cross-icon-2.svg'
import CrossThree from '@/assets/img/cross-icon-3.svg'
import CrossFour from '@/assets/img/cross-icon-4.svg'

export default {
  components: {
    CrossOne,
    CrossTwo,
    CrossThree,
    CrossFour
  },
}
</script>

<style lang="scss" scoped></style>