<template>
  <div class="course bg-white rounded-b-3xl z-10 pt-14">
    <div class="wrapper mx-36">
      <h2 @click="setInfoModal" class="course__title text-6xl">{{ getCourse.name }}</h2>
      <div class="field h-675 w-full bg-gray-200 rounded-3xl mt-10"></div>
      <Carousel />
      <modals-controller />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Carousel from '@/components/Carousel.vue'
import ModalsController from '~/components/Modals/ModalsController.vue';

export default {
  components: {
    Carousel,
    ModalsController,
  },
  methods: {
    ...mapMutations(['setModal']),
    setInfoModal() {
      this.setModal({ name: "InfoModal", data: 'Мы подобрали ментора! Начать разговор?' })
    },
  },
  async asyncData({ store }) {
    await store.dispatch('getCourses')
  },
  mounted() {
    setTimeout(() => {
      this.setInfoModal()
    }, 3000)
  },
  computed: {
    ...mapState(['courses']),
    getCourse() {
      return this.courses.find(f => f.id === +this.$route.params.id)
    },
  },
}
</script>

<style lang="scss" scoped></style>