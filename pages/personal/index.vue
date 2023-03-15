<template>
  <div class="persona bg-white rounded-b-3xl z-10">
    <div class="wrapper pt-14 flex mx-36 pb-36">
      <div class="inner">
        <div class="user flex">
          <div class="user__logo flex items-center justify-center w-14 h-14 bg-gray-200 rounded-full">
            <h2 class="user__firstname text-xl">{{ user.name[0] }}</h2>
          </div>
          <div class="user__data ml-5">
            <h2 class="user__name text-xl">{{ user.name }}</h2>
            <p class="user__date opacity-40">на платформе с {{ formatDate }}</p>
          </div>
        </div>
        <personal-actions />
      </div>
      <div class="courses ml-36">
        <div class="courses__title">
          <h2 class="courses__text text-5xl">Мои курсы</h2>
          <div class="courses__actions flex items-center opacity-40 mt-3">
            <input type="checkbox" class="checkbox w-3 h-3">
            <p class="courses__show ml-1">Отображать пройденные курсы</p>
          </div>
        </div>
        <courses-list :courses="courses"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CoursesList from '@/components/Personal/CoursesList.vue'
import PersonalActions from '~/components/UI/Personal/PersonalActions.vue';

export default {
  components: {
    CoursesList,
    PersonalActions,
  },
  computed: {
    ...mapState(['user', 'courses']),
    formatDate() {
      const date = new Date(this.user.createdAt);
      const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
      return formattedDate
    },
  },
  mounted () {
    this.$store.dispatch('getCourses')
  },
}
</script>

<style lang="scss" scoped></style>