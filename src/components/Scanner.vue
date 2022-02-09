<script>
// To use Html5QrcodeScanner (more info below)
import {Html5QrcodeScanner} from "html5-qrcode"
// To use Html5Qrcode (more info below)
import {Html5Qrcode} from "html5-qrcode"
import { onMounted, reactive, ref } from '@vue/runtime-core'

export default {
  setup() {
    
    // const cameraId = ref()
    const codeText = ref()
    const codeResult = reactive({
      text: '',
      format: '',
      formatName: ''
    })
    const scannerConfig = reactive({
      fps: 10, 
      qrbox: { 
        width: 200, 
        height: 200 
      }
    })

    const onScanSuccess = (decodedText, decodedResult) => {
      // handle the scanned code as you like, for example:
      console.log(`Code matched = ${decodedText}`, decodedResult);

      // decodedResult = { 
      //   "decodedText": "https://github.com/ZhaoHouLin", 
      //   "result": { 
      //     "text": "https://github.com/ZhaoHouLin", 
      //     "format": { "format": 0, "formatName": "QR_CODE" } 
      //   } 
      // }
    }

    const onScanFailure = (error) => {
      // handle scan failure, usually better to ignore and keep scanning.
      // for example:
      // console.warn(`Code scan error = ${error}`);
    }

    const scanner = () => {
      let html5QrcodeScanner = new Html5QrcodeScanner("reader",scannerConfig,false);
      html5QrcodeScanner.render(onScanSuccess, onScanFailure);
    }


    const code = () => {
      const html5QrCode = new Html5Qrcode("reader");
      const qrCodeSuccessCallback = (decodedText, decodedResult) => {
          /* handle success */
        codeText.value = decodedText  
        // codeResult = decodedResult
        codeResult.text = decodedResult.result.text
        codeResult.format = decodedResult.result.format.format
        codeResult.formatName = decodedResult.result.format.formatName
        console.log(decodedResult,codeResult);
        // console.log(codeText.value,codeResult);
      };

      // If you want to prefer front camera
      // html5QrCode.start({ facingMode: "user" }, scannerConfig, qrCodeSuccessCallback);

      // If you want to prefer back camera
      html5QrCode.start({ facingMode: "environment" }, scannerConfig, qrCodeSuccessCallback);

      // Select front camera or fail with `OverconstrainedError`.
      // html5QrCode.start({ facingMode: { exact: "user"} }, scannerConfig, qrCodeSuccessCallback);

      // Select back camera or fail with `OverconstrainedError`.
      // html5QrCode.start({ facingMode: { exact: "environment"} }, scannerConfig, qrCodeSuccessCallback);

    }
    
    onMounted(() => {
      // scanner()
      code()
    })

    
    return {
      codeText,
      codeResult
    }
  },
}
</script>

<template lang="pug">
.scanner
  #reader
  h1 {{codeResult.text}}
  h1 {{codeResult.formatName}}
  //- h1 {{codeResult.decodedText}}
  //- h1 {{codeResult.result.format.formatName}}
</template>

<style lang="stylus" scoped>
.scanner
  // width 100vw
  display flex
  justify-content center
  align-items center
  flex-direction column


  


</style>