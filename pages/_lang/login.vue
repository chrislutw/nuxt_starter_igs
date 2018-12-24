<template>
  <div class="login-wrap">
    <div class="top-info">
      <div class="btn-lang">
        <a tabindex="0" @click="showLangMenu = !showLangMenu" @blur="showLangMenu = false">
          <img src="~/assets/images/icon-lang-zh_Hans.png" alt>
          {{ currentLangShortName }}
          <fa icon="angle-down"/>
        </a>
      </div>
    </div>
    <transition
      name="headerDown"
      enter-active-class="animated slideInDown"
      leave-active-class="animated slideOutUp"
      appear
    >
      <ul v-show="showLangMenu" class="menu-language">
        <li v-for="(lang, i) in langList" :key="i">
          <a @click="changeLang(lang.code)">{{ lang.name }}</a>
        </li>
      </ul>
    </transition>
    <div class="login-body">
      <div class="member-face">
        <img src="~/assets/images/icon-member.png" alt>
      </div>
      <div class="input-wrap">
        <div class="input-item">
          <span>{{ $t('login.UserName') }} :</span>
          <input
            :placeholder="$t('login.InputYourAccount')"
            v-model="userName"
            class="input-receiver"
            type="text"
          >
        </div>
        <div class="input-item">
          <span>{{ $t('login.PassWord') }} :</span>
          <input
            :placeholder="$t('login.InputYourPassword')"
            v-model="passWord"
            type="password"
            @keyup.enter="login"
          >
        </div>
      </div>
      <!-- <div class="txt-error"><i class="fas fa-times fa-sm"></i> Email填寫格式不正確</div> -->
      <div class="btn-wrap">
        <button @click.prevent="login">{{ $t('login.LogIn') }}</button>
        <nuxt-link to="/">go back index</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
const componentName = 'login'
/**
 * @module Index/Login
 * @vue-data {boolean} showLangMenu=false - 語言列開關
 * @vue-data {Object[]} langList - 語言列表
 * @vue-data {String} langList[].shortName - 簡稱
 * @vue-data {String} langList[].name - 全名
 * @vue-data {String} langList[].code - 英文代碼
 * @vue-data {String} userName='' - 帳號
 * @vue-data {String} passWord='' - 密碼
 * @vue-computed {String} currentLangShortName - 目前語言簡稱
 * @vue-computed {String} currentLang - 目前語言代碼
 */
export default {
  name: componentName,

  data() {
    return {
      showLangMenu: false,
      langList: [
        { name: '繁體中文', code: 'tw', shortName: '繁中' },
        { name: '简体中文', code: 'cn', shortName: '简中' },
        { name: 'English', code: 'en', shortName: 'EN' }
      ],
      userName: '',
      passWord: ''
    }
  },
  // server side code
  asyncData() {
    console.log('About Page is loading.')
    return new Promise(resolve => {
      setTimeout(function() {
        resolve({ dataToClient: '123' })
      }, 1000)
    })
  },
  computed: {
    currentLang() {
      return this.$store.state.locale
    },
    currentLangShortName() {
      return this.langList.find(lang => lang.code === this.currentLang).shortName
    }
  },
  mounted() {
    console.log('login mounted.')
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.login-wrap,
.menu-language {
  animation-duration: 0.3s;
  animation-delay: 0.15s;
}
</style>
