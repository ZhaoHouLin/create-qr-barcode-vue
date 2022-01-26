<script>
import QRCode from "qrcode"
import { onMounted, reactive, ref, watch } from '@vue/runtime-core'
export default {
  setup() {

    const content = ref()
    const url = ref('https://github.com/ZhaoHouLin')
    const codeColor = ref("#000000")
    const bgckgroundColor = ref("#ffffff")

    const defaultSetting = reactive({
      errorCorrectionLevel: 'H',
      // version: 4
      margin: 1,
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
      codeColor,
      changeCodeColor,
      bgckgroundColor,
      changeBgckgroundColor
    }
  },
}
</script>


<template lang="pug">
.qrcode
  #container(ref='content')
  input(v-model='url' @input='createQRCode')
  .code-color
    h3 code color
    input(type='color' v-model='codeColor' @input='changeCodeColor' )
  .bgckground-color
    h3 bgckground color
    input(type='color' v-model='bgckgroundColor' @input='changeBgckgroundColor' )

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

.code-color,.bgckground-color
  display flex
  // border 1px solid #000  

</style>