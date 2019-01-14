<template>
  <div class="login-wrap">
    <div class="top-info">
      <div class="btn-lang">
        <a tabindex="0" @click="showLangMenu = !showLangMenu" @blur="showLangMenu = false">
          <img src="~/assets/images/icon-lang-zh_Hans.png" alt>
          {{ currentLangShortName }}
          <fa icon="angle-down"/>
          <fa :icon="['far', 'angry']"/>
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
export default {
  name: 'Login',

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
  // first loading is server side code, orther is client
  asyncData(context) {
    if (process.server) {
      console.log('About Page is loading. ')
    } else {
      return new Promise(resolve => {
        setTimeout(function() {
          resolve({ dataToClient: '123' })
        }, 1000)
      })
    }
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
    console.log('login mounted.', window)
    ;[1, 2, 3, 4, 5].includes(3)
  },
  methods: {
    test() {
      console.log('test debugger')
      debugger
    },
    testwindow() {
      console.log('login method.', window)
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrap,
.menu-language {
  animation-duration: 0.3s;
  animation-delay: 0.15s;
}
</style>
