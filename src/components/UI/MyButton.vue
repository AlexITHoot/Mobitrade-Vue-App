<template>
  <button>
    <slot></slot> 
  </button>
</template>

<script>
  export default {
    name:'my-button'
  }
</script>

<style lang="scss">
.btn{
  display:flex;
  align-items: center;
  justify-content: center;  
  border-radius: 5px;
  &.primary-btn{
    background-color: #f9a519;
    color:#fff;
    font-size: 16px;
    transition:300ms;
    &:hover{
        background: lighten(#f9a519, 10%);
        color: #fff;
    } 
  }    
}

</style>