<template>
  <div class="courses flex items-center mt-9 gap-4">
    <ul v-for="course in courses" :key="course.id" class="courses__list">
      <li @click="$router.push('/personal/' + course.lang + '/' + course.id)" class="courses__item max-w-sm rounded-3xl p-7 cursor-pointer"
        :class="hasColor(course.query)">
        <h2 class="courses__name text-5xl">{{ course.name }}</h2>
        <div class="lessons mt-28">
          <p class="lesson text-lg">{{ course.labels[0] }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    courses: {
      type: Array,
    },
  },
  middleware: ['router'],
  methods: {
    parseLessons(lessons) {
      return JSON.parse(lessons)
    },
    hasColor(course) {
      switch (course) {
        case 'javascript-advance': {
          return 'bg-yellow-200'
        }
        case 'javascript-axao': {
          return 'bg-blue-200'
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>