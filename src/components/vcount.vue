<template>
    <div class="counter-component">
      <div class="counter-btn" @click="minus"> - </div>
      <div class="counter-show">
        <input type="text" v-model="nowNumber" @blur="fixedNumber">
      </div>
      <div class="counter-btn" @click="add"> + </div>
    </div>
</template>
<script>
export default {
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {
      nowNumber: this.min
    }
  },
  methods: {
    minus () {
      if (this.nowNumber <= this.min) {
        return
      }
      this.nowNumber --
    },
    add () {
      if (this.nowNumber >= this.max) {
        return
      }
      this.nowNumber ++
    },
    fixedNumber () {
      let fix
      if (typeof this.nowNumber === 'string') {
        fix = this.nowNumber.replace(/\D/g, '')
      } else {
        fix = this.nowNumber
      }
      if (fix > this.max || fix < this.min) {
        fix = this.min
      }
      this.nowNumber = fix
    }
  },
  watch: {
    nowNumber () {
      this.$emit('on-change', this.nowNumber)
    }
  }
}
</script>
<style scoped>
.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.counter-show {
  float: left;
}
.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23px;
  line-height: 23px;
  width: 30px;
  outline: none;
  text-indent: 4px;
}
.counter-btn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}
.counter-btn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
