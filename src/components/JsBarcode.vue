<script>
import Jsbarcode from "jsbarcode"
import { computed, onMounted, reactive, ref, watch } from '@vue/runtime-core'
export default {
  setup() {
    const text = ref('JsBarcode')
    const lineColor = ref('#000000')
    const bgckgroundColor = ref('#ffffff')
    const barWidth = ref(2)
    const barHeight = ref(50)

    const formatCode = reactive([
      { "CODE128 Auto": "CODE128" },
      { "CODE128 A": "CODE128A" },
      { "CODE128 B": "CODE128B" },
      { "CODE128 C": "CODE128C" },
      { "CODE39": "CODE39" }
    ])

    const selectCode = ref("CODE128")

    const defaultSetting = reactive({
      format: selectCode.value,
      width: barWidth.value,
      height: barHeight.value,
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
      createBarcode()
    }
    const changeBgckgroundColor = () => {
      defaultSetting.background = bgckgroundColor.value
      createBarcode()
    }
    const changeBarWidth = () => {
      defaultSetting.width = barWidth.value
      createBarcode()
    }
    const changeBarHeight = () => {
      defaultSetting.height = barHeight.value
      createBarcode()
    }
    const changeFormat = () => {
      
    }

    onMounted(()=> {
      JsBarcode("#barcode", text.value, defaultSetting);
    })

    watch(selectCode,(code)=> {
      defaultSetting.format = code
      createBarcode()
    })

    return {
      text,
      createBarcode,
      lineColor,
      changeLineColor,
      bgckgroundColor,
      changeBgckgroundColor,
      barWidth,
      changeBarWidth,
      barHeight,
      changeBarHeight,
      formatCode,
      selectCode
    }
  },
}
</script>


<template lang="pug">
.js-barcode.flex.justify-center.items-center.flex-col.m-2
  canvas#barcode.border
  .bar-code-format
    input.text-center.border(v-model='text' @input='createBarcode')
    select(v-model='selectCode' )
      option(v-for='item in formatCode' :value='Object.values(item)[0]') {{ Object.keys(item)[0] }}
  .bar-width.flex
    h3 Bar Width 
    input(type='range' class='' min="1" max="4" v-model='barWidth' @input='changeBarWidth')
    h3 {{barWidth}}
  .bar-height.flex
    h3 Bar Height 
    input(type='range' class='' min="20" max="100" v-model='barHeight' @input='changeBarHeight')
    h3 {{barHeight}}
  .line-color.flex
    h3 line color
    input(type='color' v-model='lineColor' @input='changeLineColor' )
  .bgckground-color.flex
    h3 bgckground color
    input(type='color' v-model='bgckgroundColor' @input='changeBgckgroundColor' )


</template>

<style lang="stylus" scoped>
// .js-barcode
//   display flex
//   justify-content center
//   align-items center
//   flex-direction column

// #barcode
//   border 1px solid #000  
//   margin 8px

// .line-color,.bgckground-color
//   display flex
  // border 1px solid #000
</style>