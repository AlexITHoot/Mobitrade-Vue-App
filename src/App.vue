<template>
  <my-header></my-header>
  <router-view/>
  <my-footer></my-footer>
</template>

<script>
  import MyHeader from '@/components/MyHeader.vue';
  import MyFooter from '@/components/MyFooter.vue';
  export default {
    components:{
      MyHeader,MyFooter
    }
  }
</script>

<style lang="scss">
  @import '@/assets/scss/style.module.scss';
  #app{
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>