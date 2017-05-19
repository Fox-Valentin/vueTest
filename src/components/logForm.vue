<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="userNameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" 
          v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="loginFn">登录</a>
        </div>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userNameModel: '',
      passwordModel: '',
      errorText: ''
    }
  },
  computed: {
    userErrors () {
      let errorText, status
      if (!/@/g.test(this.userNameModel)) {
        errorText = '需要包含@'
        status = false
      } else {
        errorText = ''
        status = true
      }
      if (!this.userNameModelFlag) {
        errorText = ''
        this.userNameModelFlag = true
      }
      return {
        errorText,
        status
      }
    },
    passwordErrors () {
      let errorText, status
      if (!/^\w{1,6}$/g.test(this.passwordModel)) {
        errorText = '长度1-6'
        status = false
      } else {
        errorText = ''
        status = true
      }
      if (!this.passwordModelFlag) {
        errorText = ''
        this.passwordModelFlag = true
      }
      return {
        errorText,
        status
      }
    }
  },
  methods: {
    loginFn () {
      if (this.userErrors.status === false || this.passwordErrors.status === false) {
        this.errorText = '用户名或者密码格式有错误'
      } else {
        this.$http.get('api/login').then(
          (res) => {
            this.$emit('on-login', res.data)
          },
          (err) => {
            console.log(err)
          }
        )
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
