<script>
import JsBarcode from './JsBarcode.vue'
import QRCode from './QRcode.vue'
export default {
  components: {
    JsBarcode,
    QRCode,
  },

  setup() {
    return {

    }
  },
}
</script>

<template lang="pug">
.createcode-card.shadow-2xl.p-4.rounded-2xl
  JsBarcode  
  QRCode
</template>

<style lang="stylus" scoped>
.createcode-card
  display flex
  justify-content center
  flex-direction column
  background-color #fff
</style>