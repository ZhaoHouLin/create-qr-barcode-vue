<script>
import QRCode from "qrcode"
import { onMounted, reactive, ref, watch } from '@vue/runtime-core'
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

      QRCode.toCanvas(url.value, defaultSetting,  (err,canvas) => {
        if (err) throw err
        content.value.innerHTML = ""
        content.value.appendChild(canvas)
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
      QRCode.toCanvas(url.value, defaultSetting,  (err,canvas) => {
        if (err) throw err
        content.value.innerHTML = ""
        content.value.appendChild(canvas)
      })   
    })

    return {
      createQRCode,
      content,
      url,
      codeColor, changeCodeColor,
      bgckgroundColor, changeBgckgroundColor,
      qrMargin, changeQRMargin
    }
  },
}
</script>


<template lang="pug">
.qrcode
  #container.border(ref='content')
  input(v-model='url' @input='createQRCode')
  .qr-color
    h3 QR Color
    input(type='color' v-model='codeColor' @input='changeCodeColor' )
  .bgckground-color
    h3 Bgckground
    input(type='color' v-model='bgckgroundColor' @input='changeBgckgroundColor' )
  .qr-margin.flex 
    h3 QR Margin
    input(type="range" min="0" max="6" step="1" v-model='qrMargin' @input='changeQRMargin' )

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

.qr-color,.bgckground-color
  display flex
  // border 1px solid #000  

</style>