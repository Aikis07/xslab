<template>
  <div class="auth bg-gray-100 h-screen">
    <div class="wrapper max-w-3xl bg-white h-full">
      <div class="inner mx-36">
        <base-header />
        <h2 class="inner__title text-6xl">Авторизация
          в личный кабинет</h2>
        <base-socials />
        <base-form>
          <template #title>
            По данным аккаунта
          </template>
          <template #enterLogin>
            <input v-model="enteredData.email" @click="errorMassage = false"
              class="form__input py-4 pl-5 border rounded-xl w-full text-lg mt-6 outline-none" type="email"
              placeholder="Ваш логин">
            <h2 v-if="!isValidEmail" class="error text-red-400">не верный формат почты</h2>
          </template>
          <template #enterPass>
            <input v-model="enteredData.password" @click="errorMassage = false"
              class="form__input py-4 pl-5 border rounded-xl w-full text-lg mt-6 outline-none" type="password"
              placeholder="Пароль">
            <h2 v-if="!isValidPass" class="error text-red-400">не достаточная длина пароля</h2>
          </template>
          <template #saveData>
            <div class="form__link flex items-end justify-between mt-6">
              <div class="form__save flex items-end">
                <input class="form__checkbox h-6 w-6 rounded-md opacity-50" type="checkbox">
                <p class="form__text ml-3">Запомнить меня</p>
              </div>
              <a class="form__recovery border-b-2" href="#">Восстановление пароля</a>
            </div>
          </template>
        </base-form>
        <h2 v-if="errorMassage" class="error text-red-400 text-center">Не верный логин\пароль</h2>
        <div class="form__actions mt-8 flex flex-col gap-3">
          <button @click="onClickEnter" class="form__btn text-lg py-4 bg-cyan-200 w-full rounded-xl font-semibold">
            Войти в аккаунт
          </button>
          <nuxt-link class="form__btn text-lg py-4 w-full rounded-xl border-2 font-semibold text-center"
            to="/sign-up">Регистрация аккаунта</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeader from '@/components/Auth/BaseHeader.vue';
import BaseForm from '~/components/UI/Auth/BaseForm.vue'
import BaseSocials from '~/components/UI/Auth/BaseSocials.vue';

export default {
  layout: 'empty',
  components: {
    BaseHeader,
    BaseForm,
    BaseSocials,
  },
  data() {
    return {
      errorMassage: false,
      enteredData: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    async onClickEnter() {
      if (this.isValidEmail) {
        try {
          const response = await this.$store.dispatch('userAuth', this.enteredData)
          if (response.status === 201) {
            this.$router.push('/personal')
          }
        } catch (error) {
          this.errorMassage = true
        }
      }
    }
  },
  computed: {
    isValidEmail() {
      if (this.enteredData.email !== '') {
        return this.enteredData.email.match(/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u)
      } else {
        return true
      }
    },
    isValidPass() {
      if (this.enteredData.password.length < 5 && this.enteredData.password !== '') {
        return false
      } else {
        return true
      }
    }
  },
}
</script>

<style lang="scss" scoped></style>