<script>
import Jsbarcode from "jsbarcode"
import { computed, onMounted, reactive, ref } from '@vue/runtime-core'
export default {
  setup() {
    const text = ref('JsBarcode')
    const lineColor = ref('#000000')
    const bgckgroundColor = ref('#fff')

    const defaultSetting = reactive({
      format: "CODE128",
      width: 2,
      height: 50,
      displayValue: true,
      fontOptions: "",
      font: "monospace",
      textAlign: "center",
      textPosition: "bottom",
      textMargin: "2",
      fontSize: 20,
      background: "#fff",
      lineColor: "#000000",
      margin: 20,
    })

    

    const createBarcode = () => {
      JsBarcode("#barcode", text.value, defaultSetting);
    }

    const changeLineColor = () => {
      defaultSetting.lineColor = lineColor.value
      JsBarcode("#barcode", text.value, defaultSetting);
    }

    const changeBgckgroundColor = () => {
      defaultSetting.background = bgckgroundColor.value
      JsBarcode("#barcode", text.value, defaultSetting);
    }



    onMounted(()=> {
      JsBarcode("#barcode", text.value, defaultSetting);
    })

    return {
      text,
      createBarcode,
      lineColor,
      changeLineColor,
      bgckgroundColor,
      changeBgckgroundColor
    }
  },
}
</script>


<template lang="pug">
.js-barcode
  canvas#barcode
  input(v-model='text' @input='createBarcode')
  .line-color
    h3 line color
    input(type='color' v-model='lineColor' @input='changeLineColor' )
  .bgckground-color
    h3 bgckground color
    input(type='color' v-model='bgckgroundColor' @input='changeBgckgroundColor' )

</template>

<style lang="stylus" scoped>
.js-barcode
  display flex
  justify-content center
  align-items center
  flex-direction column

#barcode
  border 1px solid #000  
  margin 8px

.line-color,.bgckground-color
  display flex
  // border 1px solid #000
</style>