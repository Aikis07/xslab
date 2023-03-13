<template>
  <div class="modal px-3 py-2 shadow-2xl rounded-xl flex items-center gap-3">
    <modal />
    <h2 class="modal__title">{{modal.data}}</h2>
    <button class="modal__action rounded-md bg-blue-200 px-2 py-1">Начать</button>
    <button @click="removeModal" class="modal__action rounded-md border px-2 py-1">Позже</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import Modal from '@/assets/img/modal.svg'

  export default {
    components: {
      Modal,
    },
    methods: {
        ...mapMutations(['removeModal'])
    },
    computed: {
        ...mapState(['modal']),
    },
  }
</script>

<style lang="scss" scoped>

</style>