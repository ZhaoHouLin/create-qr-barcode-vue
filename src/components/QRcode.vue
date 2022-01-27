<script>
import QRCode from "qrcode"
import { onMounted, reactive, ref, watch } from '@vue/runtime-core'
import downloadPng from "../api/downloadCanvas"
export default {
  setup() {

    const content = ref()
    const url = ref('https://github.com/ZhaoHouLin')
    const codeColor = ref("#000000")
    const bgckgroundColor = ref("#ffffff")
    const qrMargin = ref(2)

    const defaultSetting = reactive({
      errorCorrectionLevel: 'H',
      // version: 4
      margin: qrMargin.value,
      color: {
        dark: codeColor.value,
        light: bgckgroundColor.value
      }
    })

    

    const createQRCode = () => {
      QRCode.toDataURL('I am ZZ')
        .then(url => {
          // console.log(url)
        })
        .catch(err => {
          console.error(err)
        })

      QRCode.toCanvas(content.value,url.value, defaultSetting,  (err,canvas) => {
        if (err) throw err
      })  
    }

    const changeQRMargin = () => {
      defaultSetting.margin = parseInt(qrMargin.value)
    }
    const changeCodeColor = () => {
      defaultSetting.color.dark = codeColor.value
    }
    const changeBgckgroundColor = () => {
      defaultSetting.color.light = bgckgroundColor.value  
    }

    watch(defaultSetting, ()=> {
      createQRCode()
    })


    onMounted(()=> {
      console.log(content.value);
      QRCode.toCanvas(content.value,url.value,defaultSetting,  (err,canvas) => {
        if (err) throw err
      })   
    })

    return {
      createQRCode,
      content,
      url,
      codeColor, changeCodeColor,
      bgckgroundColor, changeBgckgroundColor,
      qrMargin, changeQRMargin,
      downloadPng
    }
  },
}
</script>


<template lang="pug">
.qrcode
  canvas#qrcode.border(ref='content' @click='downloadPng("#qrcode","QRcode")')
  input( class='w-3/4 border mb-2' v-model='url' @input='createQRCode')
  .qr-margin.flex.mb-2
    h3 QR Margin
    input(type="range" min="0" max="6" step="1" v-model='qrMargin' @input='changeQRMargin' )
    h4 {{qrMargin}}
  .qr-color.mb-2
    h3 QR Color
    input(type='color' v-model='codeColor' @input='changeCodeColor' )
    input( class='w-20 border text-right' v-model='codeColor' )
  .bgckground-color.mb-2
    h3 Bgckground
    input(type='color' v-model='bgckgroundColor' @input='changeBgckgroundColor' )
    input( class='w-20 border text-right' v-model='bgckgroundColor' )
  
</template>

<style lang="stylus" scoped>
.qrcode
  display flex
  justify-content center
  align-items center
  flex-direction column

#container
  // border 1px solid #000  
  margin 8px

.qr-margin
  width 100%
  display flex
  justify-content space-between
  align-items center
  :nth-child(1)
    width 30%
  :nth-child(2)
    width 40%
    margin 0 0.5rem
  :nth-child(3)
    width 30%
    text-align right

.qr-color,.bgckground-color
  width 100%
  display flex
  justify-content space-between
  align-items center
  :nth-child(1)
    width 30%
  :nth-child(2)
    width 40%
    margin 0 0.5rem
  :nth-child(3)
    width 30%


</style>