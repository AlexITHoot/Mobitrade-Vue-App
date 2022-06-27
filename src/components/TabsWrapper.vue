<template>
  <div class="tabs">
    <ul class="sentences-nav nav">
      <li v-for="title in tabTitles" :key="title" @click="selectedTitle=title" class="sentences-nav__item">{{title}}</li>
    </ul>
    <slot></slot>
  </div>  
</template>

<script>
  import {ref,provide} from 'vue';
  export default {
    setup(props,{slots}){
      const tabTitles = ref(slots.default().map((tab)=> tab.props.title));
      const selectedTitle = ref(tabTitles.value[0]);
      provide('selectedTitle',selectedTitle)
      return{
        selectedTitle,
        tabTitles
      }
    }
  }
</script>

<style>

</style>