<template>
  <div class="actions mt-14 flex flex-col gap-3">
    <div class="courses bg-gray-200 px-4 py-1 flex items-center rounded-lg w-fit">
      <my-courses />
      <button class="courses__btn ml-2">Мои курсы</button>
    </div>
    <div class="courses bg-gray-200 px-4 py-1 flex items-center rounded-lg w-fit">
      <diamond />
      <button class="courses__btn ml-2">Управление подпиской</button>
    </div>
    <div class="courses bg-gray-200 px-4 py-1 flex items-center rounded-lg w-fit">
      <mentor />
      <button class="courses__btn ml-2">Вызов ментора</button>
    </div>
    <div class="courses bg-gray-200 px-4 py-1 flex items-center rounded-lg w-fit">
      <api />
      <button class="courses__btn ml-2">Выделение API</button>
    </div>
    <div class="courses bg-gray-200 px-4 py-1 flex items-center rounded-lg w-fit">
      <zap />
      <button class="courses__btn ml-2">Достижения</button>
    </div>
  </div>
</template>

<script>
import MyCourses from '@/assets/img/button-icons/my-courses.svg'
import Diamond from '@/assets/img/button-icons/diamond.svg'
import Mentor from '@/assets/img/button-icons/mentoring.svg'
import Api from '@/assets/img/button-icons/api.svg'
import Zap from '@/assets/img/button-icons/progress.svg'

  export default {
    components: {
      MyCourses,
      Diamond,
      Mentor,
      Api,
      Zap
    },
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss" scoped>

</style>