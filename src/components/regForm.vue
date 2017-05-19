<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label"> 用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="regUserModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label"> 密码：</span>
        <div class="g-form-input">
          <input type="text" v-model="regpwdModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{ pwdErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label"> 再次输入：</span>
        <div class="g-form-input">
          <input type="text" v-model="regPwdAgainModel" placeholder="请再输入密码">
        </div>
        <span class="g-form-error">{{ pwdAgainErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="register">注册</a>
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
      regUserModel: '',
      regpwdModel: '',
      regPwdAgainModel: '',
      errorText: ''
    }
  },
  computed: {
    userErrors () {
      let status, errorText
      if (!/^\w{1,9}$/g.test(this.regUserModel)) {
        status = false
        errorText = '长度为1-9'
      } else {
        status = true
        errorText = ''
      }
      if (!this.regUserModelFlag) {
        this.regUserModelFlag = true
        errorText = ''
      }
      return {
        status,
        errorText
      }
    },
    pwdErrors () {
      let status, errorText
      if (!/^\w{1,9}$/g.test(this.regpwdModel)) {
        status = false
        errorText = '长度为1-9'
      } else {
        status = true
        errorText = ''
      }
      if (!this.regpwdModelFlag) {
        this.regpwdModelFlag = true
        errorText = ''
      }
      return {
        status,
        errorText
      }
    },
    pwdAgainErrors () {
      let status, errorText
      if (this.regPwdAgainModel !== this.regpwdModel) {
        status = false
        errorText = '再次输入错误'
      } else {
        status = true
        errorText = ''
      }
      if (!this.regpwdAnginModelFlag && !this.regpwdModelFlag) {
        this.regpwdAnginModelFlag = true
        errorText = ''
      }
      return {
        status,
        errorText
      }
    }
  },
  methods: {
    register () {
      if (!this.userErrors.status || !this.pwdErrors || !this.pwdAgainErrors) {
        this.errorText = '请将信息填写完整'
      } else {
        this.$http.post('/api/login', {
          username: this.regUserModel,
          password: this.regpwdModel
        }).then(
          (res) => {
            this.$emit('on-reg', res.data)
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
.dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
}
.dialog-cover {
  background: #000;
  opacity: .3;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-content {
  width: 50%;
  position: fixed;
  max-height: 50%;
  overflow: auto;
  background: #fff;
  top: 20%;
  left: 50%;
  margin-left: -25%;
  z-index: 10;
  border: 2px solid #464068;
  padding: 2%;
  line-height: 1.6;
}
.dialog-close {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
}
.dialog-close:hover {
  color: #4fc08d;
}
</style>
