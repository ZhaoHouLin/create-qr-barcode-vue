<script>
import { watch, ref } from "vue"
export default {

  emits:['CallBack'],

  setup(props,{emit}) {
    const checked = ref(true)
  
    watch(checked,(val)=> {
      emit('CallBack',val)
    })

    return {
      checked
    }
  },
}
</script>

<template lang="pug">
label.switch
  input(type="checkbox" v-model="checked")
  span.slider.round
</template>

<style lang="stylus" scoped>
.switch 
  position relative
  display inline-block
  width 60px
  height 34px
  transform scale(60%)

  input
    opacity 0
    width 0
    height 0

    &:checked + .slider
      background-color #2196F3
    &:checked + .slider:before
      -webkit-transform translateX(26px)
      -ms-transform translateX(26px)
      transform translateX(26px)
    &:focus + .slider
      box-shadow 0 0 1px #2196F3

  .slider
    position absolute
    cursor pointer
    top 0
    left 0
    right 0
    bottom 0
    background-color #ccc
    -webkit-transition: .4s
    transition: .4s
    &:before
      position absolute
      content ""
      width 26px
      height 26px
      left 4px
      bottom 4px
      background-color white
      -webkit-transition .4s
      transition .4s
    &.round
      border-radius 43px
      &:before
        border-radius 50%
</style>