<template>
  <div class="product-item-card">
      <a href="#" class="product__link">
          <div class="wrapping">
              <div class="product__photo">
                  <img src="@/assets/images/item.jpg" alt="photo">
              </div>
              <div class="product__title">
                  <h3>iPhone X 64Gb Silver</h3>
                  <p>820$</p>
              </div>
          </div>
      </a>
      <div class="wrap-btn text-center">
          <my-button class="btn primary-btn">Додати у кошик</my-button>
      </div>                                         
  </div>
</template>

<script>
  export default {
    name:'product-card'
  }
</script>

<style>

</style>