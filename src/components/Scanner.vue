<script>
// To use Html5QrcodeScanner (more info below)
import { Html5QrcodeScanner } from "html5-qrcode"
// To use Html5Qrcode (more info below)
import { Html5Qrcode } from "html5-qrcode"
import { onMounted, reactive, ref } from '@vue/runtime-core'
import ToggleSwitch from "./ToggleSwitch.vue"
export default {
  components: {
    ToggleSwitch
  },
  setup() {
    
    const html5QrCode = ref()
    const open = ref(true)
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
      console.warn(`Code scan error = ${error}`);
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
      // console.log(decodedResult,codeResult);
    };

    const scannerSetting = () => {
      html5QrCode.value = new Html5Qrcode("reader");
      start()
    }

    const start = async () => {
      open.value = true
      // If you want to prefer front camera
      // html5QrCode.start({ facingMode: "user" }, scannerConfig, codeSuccessCallback);
      // If you want to prefer back camera
      await html5QrCode.value.start({ facingMode: "environment" }, scannerConfig, codeSuccessCallback);
      // Select front camera or fail with `OverconstrainedError`.
      // html5QrCode.start({ facingMode: { exact: "user"} }, scannerConfig, codeSuccessCallback);

      // Select back camera or fail with `OverconstrainedError`.
      // html5QrCode.start({ facingMode: { exact: "environment"} }, scannerConfig, codeSuccessCallback);
    }
    
    const stop = async () => {
      open.value = false
      await html5QrCode.value.stop().then(() => {
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
      })
      .catch(err => {
        // failure, handle it.
        console.log(`Error scanning file. Reason: ${err}`)
      });
      
    }

    const switchScanfile = (bool) => {
      open.value = bool
      open.value ? start() : stop() 
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
      open
    }
  },
}
</script>

<template lang="pug">
.scanner-card.shadow-2xl.p-4.rounded-2xl
  #reader.mb-2
  .info
    .result.flex.mb-2.justify-between
      //- h3 result
      a(:href="codeResult.text" target="_blank") result (link)
      input(:value="codeResult.text" :href="codeResult.text" target="_blank" class="border-b-2 focus:border-b-blue-400 ")
      //- a.border-b-2(:href="codeResult.text" target="_blank") {{codeResult.text}}
    .code-type.flex.mb-2.justify-between
      h3 code type
      //- input.border(:value="codeResult.formatName")
      p.border-b-2 {{codeResult.formatName}}
  .switch
    .text.flex.justify-between.items-center
      ToggleSwitch( @CallBack='switchScanfile' )
      h3 {{open?'Scan code':'Scan file'}}
  //- input#qr-input-file(type="file" accept="image/*" @change="scanFile($event)" v-if="!open")
  input(type="file" accept="image/*" @change="scanFile($event)" v-if="!open" class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100")
</template>

<style lang="stylus" scoped>
.scanner-card
  display flex
  justify-content center
  align-items center
  flex-direction column
  background-color #fff

.info
  // width 300px
  .result,.code-type
    width 100%
    :nth-child(1)
      text-align center
      width 30%
    :nth-child(2)
      text-align center
      width 70%
      margin-left 1rem
    // :nth-child(3)
    //   text-align center
    //   width 60%

.result input
  outline none

</style>