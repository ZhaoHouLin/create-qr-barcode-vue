<script>
import Jsbarcode from "jsbarcode"
import { onMounted, reactive, ref, watch } from '@vue/runtime-core'
import ToggleSwitch from "./ToggleSwitch.vue"
import downloadPng from "../api/downloadCanvas"
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
    const textMargin = ref(0)

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
      textMargin: textMargin.value,
      fontSize: fontSize.value,
      background: bgckgroundColor.value,
      lineColor: lineColor.value,
      margin: barMargin.value
    })

    


    // // 下載Canvas元素的圖片
    // const downloadPng = () => {
    //   // 通過選擇器獲取canvas元素
    //   const canvas = document.querySelector('#barcode')
    //   // 使用toDataURL方法將影象轉換被base64編碼的URL字串
    //   const url = canvas.toDataURL('image/png')
    //   // 生成一個a元素
    //   const a = document.createElement('a')
    //   // 建立一個單擊事件
    //   const event = new MouseEvent('click')
      
    //   // 將a的download屬性設定為我們想要下載的圖片名稱，若name不存在則使用‘下載圖片名稱’作為預設名稱
    //   a.download = text.value || '下載圖片名稱'
    //   // 將生成的URL設定為a.href屬性
    //   a.href = url
      
    //   // 觸發a的單擊事件
    //   a.dispatchEvent(event)
    // }

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
    const changeTextMargin = () => {
      defaultSetting.textMargin = textMargin.value
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
      radioPicked, alignRadio,
      fontSize, changeFontSize,
      textMargin, changeTextMargin,
      downloadPng
    }
  },
}
</script>


<template lang="pug">
.js-barcode.flex.justify-center.items-center.flex-col
  canvas#barcode.border.mb-4(@click='downloadPng("#barcode",text)')
  .bar-code-format.w-full.flex.justify-between
    input( class='text-center border ' v-model='text' @input='createBarcode')
    select.border(v-model='selectCode' )
      option(selected value='CODE128' disabled) Please Select
      option(v-for='item in formatCode' :value='item') {{ Object.values(item)[0].option }}

  .bar-width
    h3 Bar Width 
    input(type='range' class='' min="1" max="4" v-model='barWidth' @input='changeBarWidth')
    h4 {{barWidth}}
  .bar-height
    h3 Bar Height 
    input(type='range' class='' min="20" max="100" v-model='barHeight' @input='changeBarHeight')
    h4 {{barHeight}}
  .bar-margin
    h3 Bar Margin 
    input(type='range' class='' min="0" max="30" step="1"  v-model='barMargin' @input='changeBarMargin')
    h4 {{barMargin}}
  .line-color
    h3 Line Color
    input(type='color' v-model='lineColor' @input='changeLineColor' )
    input( class='w-20 border text-center' v-model='lineColor' @input='changeLineColor')
  .bgckground-color
    h3 Bgckground
    input(type='color' v-model='bgckgroundColor' @input='changeBgckgroundColor' )
    input( class='w-20 border text-center' v-model='bgckgroundColor' @input='changeBgckgroundColor')
  .show-text.flex.items-center.justify-between
    h3 Show text
    ToggleSwitch( @CallBack='changeShowText' )
    h4(v-show='showText') Show
    h4(v-show='!showText') Hide
  .text-options(v-show='showText')
    .text-align.flex.items-center
      h3 Text Align 
      .radio.flex.items-baseline(v-for="item in alignRadio")
        input(type="radio" :id='item.id' :value='item.val' v-model='radioPicked')
        label(:for='item.id') {{item.id}}
    .font-size.flex.items-center
      h3 Font Size
      input(type="range" min="8" max="36" v-model='fontSize' @input="changeFontSize")
      h4 {{fontSize}}
    .text-margin.flex.items-center
      h3 Text Margin
      input(type="range" min="-20" max="20" v-model='textMargin' @input="changeTextMargin")
      h4 {{textMargin}}  

</template>

<style lang="stylus" scoped>
.bar-width,.bar-height,.bar-margin,.line-color,.bgckground-color
  width 100%
  margin-bottom 0.2rem
  display flex
  justify-content space-between
  align-items center
  h3,h4
    width 30%
  input
    width 40%  
  :nth-child(2)
    margin 0 0.5rem
  :nth-child(3)
    text-align right

.line-color,.bgckground-color
  display flex
  justify-content space-between
  align-items center
  :nth-child(1)
    width 30%
  :nth-child(2)
    width 40%
  :nth-child(3)
    width 30%

.text-options
  width 100%
  display flex
  justify-content center
  align-items center
  flex-direction column
  .text-align,.font-size,.text-margin
    width 100%
    display flex
    justify-content space-between
    align-items center
  .font-size,.text-margin
    :nth-child(1)
      width 30%
    :nth-child(2)
      margin 0 0.5rem
      width 40%
    :nth-child(3)
      width 30%
      text-align right

    

</style>