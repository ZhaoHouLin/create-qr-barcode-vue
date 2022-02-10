<script>
// To use Html5QrcodeScanner (more info below)
import { Html5QrcodeScanner } from "html5-qrcode"
// To use Html5Qrcode (more info below)
import { Html5Qrcode } from "html5-qrcode"
import { onMounted, reactive, ref } from '@vue/runtime-core'

export default {
  setup() {
    
    const html5QrCode = ref()
    const bool = ref(false)
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
      const html5QrcodeScanner = new Html5QrcodeScanner("reader",scannerConfig,false);
      html5QrcodeScanner.render(onScanSuccess, onScanFailure);
    }

    const codeSuccessCallback = (decodedText, decodedResult) => {
        /* handle success */
      codeText.value = decodedText  
      codeResult.text = decodedResult.result.text
      codeResult.format = decodedResult.result.format.format
      codeResult.formatName = decodedResult.result.format.formatName
      console.log(decodedResult,codeResult);
      // console.log(codeText.value,codeResult);
    };

    const scannerSetting = () => {
      html5QrCode.value = new Html5Qrcode("reader");
      start()
    }

    const start = () => {
      
      // If you want to prefer front camera
      // html5QrCode.start({ facingMode: "user" }, scannerConfig, codeSuccessCallback);
      // If you want to prefer back camera
      html5QrCode.value.start({ facingMode: "environment" }, scannerConfig, codeSuccessCallback);
      // Select front camera or fail with `OverconstrainedError`.
      // html5QrCode.start({ facingMode: { exact: "user"} }, scannerConfig, codeSuccessCallback);

      // Select back camera or fail with `OverconstrainedError`.
      // html5QrCode.start({ facingMode: { exact: "environment"} }, scannerConfig, codeSuccessCallback);
    }
    
    const stop = () => {
      html5QrCode.value.stop().then(() => {
        // QR Code scanning is stopped.
      }).catch((err) => {
        // Stop failed, handle it.
      });
    }

    const scanFile = (e) => {      
      if (e.target.files.length == 0) {
        // No file selected, ignore 
        return;
      }

      const imageFile = e.target.files[0];
      // Scan QR Code
      html5QrCode.value.scanFile(imageFile, true)
      .then((decodedText) => {
        // success, use decodedText
        codeResult.text = decodedText
        console.log(codeResult.text);
      })
      .catch(err => {
        // failure, handle it.
        console.log(`Error scanning file. Reason: ${err}`)
      });
      
    }

    const switchScanfile = () => {
      bool.value = !bool.value
      bool.value ? stop() : start()
    }

    onMounted(() => {
      // scanner()
      scannerSetting()
    })

    
    return {
      codeText,
      codeResult,
      start,
      stop,
      scanFile,
      switchScanfile,
      bool
    }
  },
}
</script>

<template lang="pug">
.scanner
  #reader
  .info
    .result.flex.mb-2
      h3 result: 
      h4 {{codeResult.text}}
    .code-type.flex.mb-2
      h3 code type: 
      h4.border {{codeResult.formatName}}

  input#qr-input-file(type="file" accept="image/*" @change="scanFile($event)")
  //- button(@click='start') start
  button(@click='switchScanfile') {{bool?'Scan code':'Scan file'}}
</template>

<style lang="stylus" scoped>
.scanner
  // width 100vw
  display flex
  justify-content center
  align-items center
  flex-direction column


  


</style>