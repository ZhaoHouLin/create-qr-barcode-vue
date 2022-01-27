<script>
import JsBarcode from './components/JsBarcode.vue'
import QRCode from './components/QRcode.vue'
export default {
  components: {
    JsBarcode,
    QRCode
  },

  setup() {
    return {

    }
  },
}
</script>

<template lang="pug">
.card.shadow-2xl.p-4.rounded-2xl
  JsBarcode  
  QRCode
</template>

<style lang="stylus">
*
  padding 0
  margin 0
  box-sizing border-box


#app
  width 100%
  height 100vh
  display flex
  justify-content center
  align-items center
  flex-direction column

.card
  display flex
  justify-content center
  flex-direction column
  background-color #fff
</style>
