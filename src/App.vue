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
</style>
