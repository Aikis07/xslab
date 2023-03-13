<template>
  <div class="nav flex items-center">
    <ul class="nav__list flex items-center gap-8">
      <li class="nav__item">
        <div class="courses flex items-center">
          <h2 class="courses__name mr-1">Все курсы</h2>
          <arrow-down />
        </div>
      </li>
      <li class="nav__item">Подписки</li>
      <li class="nav__item">Наша команда</li>
      <li class="nav__item">Бесплатные курсы</li>
    </ul>
    <div class="nav__actions flex items-center gap-6 ml-32">
      <notify />
      <div class="user flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
        <h2 class="user__name">{{user.name[0]}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowDown from '@/assets/img/arrow-down.svg'
import Notify from '@/assets/img/notif.svg'

  export default {
    props: {
      user: {
        type: Object,
      },
    },
    components: {
      ArrowDown,
      Notify,
    },
  }
</script>

<style lang="scss" scoped>

</style>