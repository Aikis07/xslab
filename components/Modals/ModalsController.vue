<template>
  <div class="wrapper text-black flex items-center justify-center">
    <component v-if="modal !== null" class="wrapper__modal absolute top-28"
      :is="getActuallyModalName" />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import InfoModal from "./InfoModal.vue";

export default {
  components: {
    InfoModal,
  },
  methods: {
    ...mapMutations(['removeModal'])
  },
  computed: {
    ...mapState(['modal']),
    getActuallyModalName() {
      return this.modal.name;
    },
  },
};
</script>

<style lang="scss" scoped></style>