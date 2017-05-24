<template>
  <div>
    <this-dialog :isShowDialog="isShowCheckDialog" @on-close="checkStatus">
      请检查你的支付状态！
      <div class="button" @click="checkStatus">
        支付成功
      </div>
      <div class="button" @click="checkStatus">
        支付失败
      </div>
    </this-dialog>
    <this-dialog :isShowDialog="isShowSuccessDialog" @on-close="closeSuccessDialog">
      购买成功！
    </this-dialog>
    <this-dialog :isShowDialog="isShowFailDialog" @on-close="closeFailDialog">
      购买失败！
    </this-dialog>
  </div>  
</template>
<script>
import myDialog from '@/components/dialog'
export default {
  components: {
    thisDialog: myDialog
  },
  props: {
    isShowCheckDialog: {
      type: Boolean,
      default: false
    },
    orderId: {
      type: [Number, String]
    }
  },
  data () {
    return {
      isShowSuccessDialog: false,
      isShowFailDialog: false
    }
  },
  methods: {
    closeCheckDialog () {

    },
    checkStatus () {
      this.$http.post('/api/checkOrder', {orderId: this.orderId}).then(
        (res) => {
          this.isShowSuccessDialog = true
          this.$emit('on-close-check-dialog')
        }, (err) => {
        this.isShowFailDialog = true
        this.$emit('on-close-check-dialog')
        console.log(err)
      })
    },
    closeSuccessDialog () {
      this.isShowSuccessDialog = false
      this.$router.push({path: '/orderList'})
    },
    closeFailDialog () {
      this.closeFailDialog = false
      this.$router.push({path: '/orderList'})
    }
  }
}
</script>
<style scoped>

</style>
