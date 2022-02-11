<script>
import CreateCode from './components/CreateCode.vue'
import Scanner from './components/Scanner.vue'
export default {
  components: {
    CreateCode,
    Scanner
  },

  setup() {
    return {

    }
  },
}
</script>

<template lang="pug">
.content
  .card-switch.top-0.flex.justify-evenly.rounded-2xl.my-4.font-bold.text-xl.text-center
    router-link(to="/CreateCode" class=" w-full mx-1 px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-full") CreateCode
    router-link(to="/Scanner" class=" w-full mx-1 px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-full") Scanner
 
  .view
    router-view( v-slot="{ Component }" )
      transition( name="fade" ) 
        keep-alive
          component( :is="Component" )  

</template>

<style lang="stylus">
*
  padding 0
  margin 0
  box-sizing border-box

#app
  width 100%
  height 100%
  display flex
  justify-content center
  align-items center
  // flex-direction column

.content
  height 100vh
  display flex
  // justify-content center
  align-items center
  flex-direction column

  .card-switch
    width 360px
    
  .view
    display flex

.fade-enter-active,.fade-leave-active 
  transition opacity 0.5s ease

.fade-enter-from,.fade-leave-to 
  opacity 0
  
</style>
