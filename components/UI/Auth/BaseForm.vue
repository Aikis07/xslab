<template>
  <div class="form mt-14">
    <h2 class="form__title text-2xl">
      <slot name="title"></slot>
    </h2>
    <slot name="enterLogin"></slot>
    <slot name="enterMail"></slot>
    <slot name="enterPass"></slot>
    <slot name="saveData"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>