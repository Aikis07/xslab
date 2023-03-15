<template>
  <div>
    <h2 class="form__title text-2xl">
      Через почту или телефон
    </h2>
    <input v-model="enteredData.name" class="form__input py-4 pl-5 border rounded-xl w-full text-lg mt-6 outline-none"
      type="text" placeholder="Имя и фамилия">
    <h2 v-if="!isValidName" class="error text-red-400">не верный формат имени</h2>
    <input v-model="enteredData.password" class="form__input py-4 pl-5 border rounded-xl w-full text-lg mt-6 outline-none"
      type="password" placeholder="Пароль">
    <h2 v-if="!isValidPass" class="error text-red-400">пароль должен содержать не менее 8 символов строчные\заглавные
      буквы, цифры и спец символы</h2>
    <input v-model="enteredData.email" class="form__input py-4 pl-5 border rounded-xl w-full text-lg mt-6 outline-none"
      type="email" placeholder="Почта">
    <h2 v-if="!isValidEmail" class="error text-red-400">не верный формат почты</h2>
    <div class="form__phone flex items-end">
      <div @click="showCounties"
        class="form__country text-lg font-semibold py-4 px-2 border rounded-l-xl flex items-center gap-2 w-36 justify-center relative cursor-pointer">
        <img class="form__flag" :src="require(`@/assets/img${activeCountry.flag}`)" alt="" width="25">
        <h2 class="form__code">{{ activeCountry.countryCode }}</h2>
        <arrow-down />
        <div v-show="isShowCountries"
          class="form__inner flex bg-white border rounded-b-lg z-10 flex-col justify-center gap-2 absolute w-full top-full cursor-pointer">
          <div @click="changeCountry(country.id)" class="form__coutries flex gap-2 p-2" v-for="country of countries"
            :key="country.id" @mouseenter="activeCountry = country" :class="{ 'bg-cyan-200': activeCountry === country }">
            <img class="form__flag" :src="require(`@/assets/img${country.flag}`)" alt="" width="25">
            <h2 class="form__code">{{ country.countryCode }}</h2>
          </div>
        </div>
      </div>
      <input v-model="enteredData.phone"
        class="form__input py-4 pl-5 border rounded-r-xl w-full text-lg mt-6 outline-none" type="number"
        placeholder="Введите номер">
    </div>
    <h2 v-if="!isValidPhone" class="error text-red-400">телефон должен содержать 10 цифр</h2>
    <h2 v-if="isSuccess" class="error text-green-400">вы успешно зарегистрированы</h2>
    <h2 v-if="isError" class="error text-red-400">такой email или телефон уже существуют</h2>
    <div class="form__actions mt-8 flex flex-col gap-3">
      <nuxt-link to="/sign-in"
        class="form__btn text-lg py-4 bg-cyan-200 w-full rounded-xl text-center font-semibold">Войти</nuxt-link>
      <button @click="onClickRegBtn"
        class="form__btn text-lg py-4 bg-amber-200 w-full rounded-xl font-semibold">Регистрация</button>
    </div>
  </div>
</template>

<script>
import ArrowDown from '@/assets/img/arrow-down.svg'
export default {
  components: {
    ArrowDown,
  },
  data() {
    return {
      isSuccess: false,
      isError: false,
      isShowCountries: false,
      activeCountry: {
        countryCode: "+7",
        flag: "/ru.png"
      },
      activeAccount: null,
      countries: [
        {
          id: 1,
          name: "ru",
          countryCode: "+7",
          flag: "/ru.png"
        },
        {
          id: 2,
          name: "ua",
          countryCode: "+380",
          flag: "/ua.png"
        },
        {
          id: 3,
          name: "by",
          countryCode: "+375",
          flag: "/by.png"
        }
      ],
      enteredData: {
        name: "",
        email: "",
        password: "",
        phone: "",
      },
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
      if (this.enteredData.password !== '') {
        return this.enteredData.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      } else {
        return true
      }
    },
    isValidPhone() {
      if (this.enteredData.phone.length !== 10 && this.enteredData.phone !== '') {
        return false
      } else {
        return true
      }
    },
    isValidName() {
      if (this.enteredData.name !== '') {
        return this.enteredData.name.match(/^[a-zA-Zа-яА-Я]+$/)
      } else {
        return true
      }
    },
  },
  methods: {
    showCounties() {
      if (this.isShowCountries === false) {
        this.isShowCountries = true
      } else {
        this.isShowCountries = false
      }
    },
    changeCountry(countryId) {
      const findCountry = this.countries.find(f => f.id === countryId)
      this.activeCountry = findCountry
    },
    onClickRegBtn() {
      if (this.isValidEmail && this.isValidName && this.isValidPass && this.isValidPhone) {
        this.activeAccount = {
          name: this.enteredData.name,
          email: this.enteredData.email,
          password: this.enteredData.password,
          phone: this.activeCountry.countryCode + this.enteredData.phone
        }
        try {
          this.$store.dispatch('userReg', this.activeAccount)
          this.isSuccess = true
        } catch (error) {
          this.isError = true
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped></style>