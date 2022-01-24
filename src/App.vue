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
.card
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
  padding 12px
  // height 80vh
  box-shadow 0.2rem 0.2rem 0.5rem 0.2rem #222
  border-radius 12px
  display flex
  justify-content center
</style>
