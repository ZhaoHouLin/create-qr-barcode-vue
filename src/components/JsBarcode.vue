<script>
import Jsbarcode from "jsbarcode"
import { onMounted, reactive, ref, watch } from '@vue/runtime-core'
import ToggleSwitch from "./ToggleSwitch.vue"

export default {
  components: {
    ToggleSwitch
  },
  setup() {
    const text = ref('zz barcode')
    const lineColor = ref('#000000')
    const bgckgroundColor = ref('#ffffff')
    const barWidth = ref(2)
    const barHeight = ref(50)
    const barMargin = ref(20)
    const showText = ref(true)
    const fontSize = ref(20)

    const radioPicked = ref('center')
    const alignRadio = ref([
      { val: "left" , id: "left"},
      { val: "center" , id: "center"},
      { val: "right" , id: "right"},
    ])

    const formatCode = reactive([
      { CODE128 : { option: "CODE128 auto",example: "Example 1234" } },
      { CODE128A : { option: "CODE128 A",example: "EXAMPLE" } },
      { CODE128B : { option: "CODE128 B",example: "Example text" } },
      { CODE128C : { option: "CODE128 C",example: "12345678" } },
      { EAN13 : { option: "EAN13", example: "1234567890128" } },
      { EAN8 : { option: "EAN8", example: "12345670" } },
      { UPC : { option: "UPC", example: "123456789999" } },
      { CODE39 : { option: "CODE39", example: "EXAMPLE TEXT" } },
      { ITF14 : { option: "ITF14", example: "10012345000017" } },
      { ITF : { option: "ITF", example: "123456" } },
      { MSI : { option: "MSI", example: "123456" } },
      { MSI10 : { option: "MSI10", example: "123456" } },
      { MSI11 : { option: "MSI11", example: "123456"} },
      { MSI1010 : { option: "MSI1010", example: "123456" } },
      { MSI1110 : { option: "MSI1110", example: "123456" } },
      { pharmacode : { option: "Pharmacode", example: "1234" } }
    ])

    const selectCode = ref("CODE128")

    const defaultSetting = reactive({
      format: selectCode.value,
      width: barWidth.value,
      height: barHeight.value,
      displayValue: showText.value,
      fontOptions: "",
      font: "monospace",
      textAlign: "center",
      textPosition: "bottom",
      textMargin: "2",
      fontSize: fontSize.value,
      background: "#fff",
      lineColor: "#000000",
      margin: barMargin.value
    })

    
      

    const createBarcode = () => {
      JsBarcode("#barcode", text.value, defaultSetting);
    }
    const changeLineColor = () => {
      defaultSetting.lineColor = lineColor.value
    }
    const changeBgckgroundColor = () => {
      defaultSetting.background = bgckgroundColor.value
    }
    const changeBarWidth = () => {
      defaultSetting.width = barWidth.value
    }
    const changeBarHeight = () => {
      defaultSetting.height = barHeight.value
    }
    const changeBarMargin = () => {
      defaultSetting.margin = parseInt(barMargin.value)
    }
    const changeShowText = (bool) => {
      showText.value = bool
      defaultSetting.displayValue = showText.value
    }
    const changeFontSize = () => {
      defaultSetting.fontSize = fontSize.value
    }

    onMounted(()=> {
      JsBarcode("#barcode", text.value, defaultSetting);
    })

    watch(radioPicked, (val)=> {
      defaultSetting.textAlign = val
      createBarcode()
    })  

    watch(defaultSetting, ()=> {
      createBarcode()
    })  

    watch(selectCode,(code)=> {
      console.log(Object.keys(code)[0]);
      text.value = Object.values(code)[0].example
      defaultSetting.format = Object.keys(code)[0]
      createBarcode()
    })

    return {
      text,
      createBarcode,
      lineColor, changeLineColor,
      bgckgroundColor, changeBgckgroundColor,
      barWidth, changeBarWidth,
      barHeight, changeBarHeight,
      formatCode,
      selectCode,
      barMargin, changeBarMargin,
      showText, changeShowText,
      radioPicked,alignRadio,
      fontSize, changeFontSize
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
      option(selected value='CODE128' disabled) Please Select
      option(v-for='item in formatCode' :value='item') {{ Object.values(item)[0].option }}

  .bar-width.flex
    h3 Bar Width 
    input(type='range' class='' min="1" max="4" v-model='barWidth' @input='changeBarWidth')
    h3 {{barWidth}}
  .bar-height.flex
    h3 Bar Height 
    input(type='range' class='' min="20" max="100" v-model='barHeight' @input='changeBarHeight')
    h3 {{barHeight}}
  .bar-margin.flex
    h3 Bar Margin 
    input(type='range' class='' min="0" max="30" step="1"  v-model='barMargin' @input='changeBarMargin')
    h3 {{barMargin}}
  .line-color.flex
    h3 line color
    input(type='color' v-model='lineColor' @input='changeLineColor' )
  .bgckground-color.flex
    h3 bgckground color
    input(type='color' v-model='bgckgroundColor' @input='changeBgckgroundColor' )
  .show-text.flex.items-center
    h3 Show text 
    ToggleSwitch( @CallBack='changeShowText' )
    h3(v-show='showText') Show
    h3(v-show='!showText') Hide
  .text-align.flex.items-center
    h3 Text Align 
    .radio.flex.items-center(v-for="item in alignRadio")
      input(type="radio" :id='item.id' :value='item.val' v-model='radioPicked')
      label(:for='item.id') {{item.id}}
  .font-size.flex.items-center
    h3 Font Size
    input(type="range" min="8" max="36" v-model='fontSize' @input="changeFontSize")
    h3 {{fontSize}}
</template>

<style lang="stylus" scoped>

</style>