<template>
  <div>
    <section class="screen-slider">
        <div class="container">
          <swiper 
            class="main-slider"
            :slides-per-view="1"
            :space-between="50"
            :loop="true"
          >
            <swiper-slide>
              <div class="main-slider__slide">
                  <a href="#">
                      <img src="@/assets/images/slide_1.jpg" alt="slide">
                      <div class="main-slider__text">
                          <p>iPhone Xr<br>от <span>777$</span></p>
                      </div>                        
                  </a>
              </div>              
            </swiper-slide>
            <swiper-slide>
              <div class="main-slider__slide">
                  <a href="#">
                      <img src="@/assets/images/slide_2.jpg" alt="slide">
                      <div class="main-slider__text">
                          <p>iPhone Xr<br>от <span>777$</span></p>
                      </div>                        
                  </a>
              </div>                
            </swiper-slide>
          </swiper>  
        </div>
    </section>
    <!-- Product type -->
    <section class="product-type">
        <div class="container">
            <div class="row">
                <div class="col-6 col-md-3">
                    <a href="#" class="product-block" @click="$router.push('/apple-watch')">
                        <img src="@/assets/images/product-type-link1.jpg" alt="link">
                        <span class="product-block__link">Apple<br> Watch</span>
                    </a>
                </div>
                <div class="col-12 col-md-6 product_order-block">
                    <a href="#" class="product-block" @click="$router.push('/ipad')">
                        <img src="@/assets/images/product-type-link2.jpg" alt="link">
                        <span class="product-block__link">Apple<br> iPad</span>
                    </a>
                </div>
                <div class="col-6 col-md-3">
                    <a href="#" class="product-block block-right-text" @click="$router.push('/imac')">
                        <img src="@/assets/images/product-type-link3.jpg" alt="link">
                        <span class="product-block__link">iMac<br>Macbook</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!-- Hot offer -->
    <section class="hot-offer">
        <div class="container">
            <div class="sentences">
                <ul class="sentences-nav nav" role="tablist">
                    <li class="sentences-nav__item">
                        <a class="sentences-nav__link active" data-toggle="tab" href="#new" role="tab" aria-controls="new" aria-selected="true">Новинки</a>
                    </li>
                    <li class="sentences-nav__item">
                        <a class="sentences-nav__link" data-toggle="tab" href="#popular" role="tab" aria-controls="popular" aria-selected="false">Популярные товары</a>
                    </li>
                    <li class="sentences-nav__item">
                        <a class="sentences-nav__link" data-toggle="tab" href="#disconts" role="tab" aria-controls="disconts" aria-selected="false">Скидки</a>
                    </li>
                </ul>
                <div class="sentences-content tab-content">
                    <div class="sentences-content__tab tab-pane fade show active" id="new" role="tabpanel" aria-labelledby="new">
                        <div class="wrapper magic-slider">
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                  <product-card></product-card>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                  <product-card></product-card>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <product-card></product-card>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <product-card></product-card>
                                </div>                                 
                            </div>                                                        
                        </div>
                    </div>
                    <div class="sentences-content__tab tab-pane fade" id="popular" role="tabpanel" aria-labelledby="popular">
                        <div class="wrapper magic-slider">
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <product-card></product-card>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <product-card></product-card>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <product-card></product-card>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <product-card></product-card>
                                </div>                                 
                            </div>                                                        
                        </div>
                    </div>
                    <div class="sentences-content__tab tab-pane fade" id="disconts" role="tabpanel" aria-labelledby="disconts">
                        <div class="wrapper magic-slider">
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <product-card></product-card>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <product-card></product-card>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <product-card></product-card>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <product-card></product-card>
                                </div>                                 
                            </div>                                                        
                        </div>
                    </div>                    
                </div>
                <div class="wrap-btn">
                    <a href="#" class="button">смотреть больше</a>
                </div>                                 
            </div>
        </div>
    </section>
    <!-- Own service -->
    <section class="own-service">
        <div class="container">
            <div class="title">
                <h1 class="title__headline">Собственный сервисный центр</h1>
                <p class="title__subtitle">Гарантийное и постгарантийное обслуживание любой техники.</p>
            </div>
        </div>
    </section>
    <!-- Accessories -->
    <section class="accessories">
        <div class="container">
            <div class="sentences sentences_with-title">
                <div class="sentences__title">
                    <h3>аксессуары</h3>
                </div>
                <div id="select-list">
                    <select>
                        <option value="covers">Чехлы</option>
                        <option value="adapters">Кабели и переходники</option>
                        <option value="batteries">Доп. аккумуляторы</option>
                        <option value="charging">Зарядные устройства</option>
                        <option value="wireless_charging">Беспроводные зарядки</option>
                        <option value="glasses">Защитные стекла</option>
                    </select>
                </div>                
                <ul class="sentences-nav nav list-to-select"  role="tablist">
                    <li class="sentences-nav__item">
                        <a class="sentences-nav__link active" data-toggle="tab" href="#covers" role="tab" aria-controls="covers" aria-selected="true">Чехлы</a>
                    </li>
                    <li class="sentences-nav__item">
                        <a class="sentences-nav__link" data-toggle="tab" href="#adapters" role="tab" aria-controls="adapters" aria-selected="false">Кабели и переходники</a>
                    </li>
                    <li class="sentences-nav__item">
                        <a class="sentences-nav__link" data-toggle="tab" href="#batteries" role="tab" aria-controls="batteries" aria-selected="false">Доп. аккумуляторы</a>
                    </li>
                    <li class="sentences-nav__item">
                        <a class="sentences-nav__link" data-toggle="tab" href="#charging" role="tab" aria-controls="charging" aria-selected="false">Зарядные устройства</a>
                    </li>
                    <li class="sentences-nav__item">
                        <a class="sentences-nav__link" data-toggle="tab" href="#wireless_charging" role="tab" aria-controls="wireless_charging" aria-selected="false">Беспроводные зарядки</a>
                    </li>
                    <li class="sentences-nav__item">
                        <a class="sentences-nav__link" data-toggle="tab" href="#glasses" role="tab" aria-controls="glasses" aria-selected="false">Защитные стекла</a>
                    </li>                    
                </ul>
                <div class="sentences-content tab-content">
                    <div class="sentences-content__tab tab-pane fade show active" id="covers" role="tabpanel" aria-labelledby="covers-tab">
                        <div class="wrapper magic-slider">
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                  <product-card></product-card>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                  <product-card></product-card>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                  <product-card></product-card>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                  <product-card></product-card>
                                </div>                                 
                            </div>                                                        
                        </div>
                    </div>
                    <div class="sentences-content__tab tab-pane fade" id="adapters" role="tabpanel" aria-labelledby="adapters-tab">
                        <div class="wrapper magic-slider">
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <div class="product-item-card">
                                        <a href="#" class="product__link">
                                            <div class="wrapping">
                                                <div class="product__photo">
                                                    <img src="images/item.jpg" alt="photo">
                                                </div>
                                                <div class="product__title">
                                                    <h3>iPhone X 64Gb Silver</h3>
                                                    <p>820$</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="wrap-btn text-center">
                                            <a href="#">Додати у кошик</a>
                                        </div>                                         
                                    </div>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <div class="product-item-card">
                                        <a href="#" class="product__link">
                                            <div class="wrapping">
                                                <div class="product__photo">
                                                    <img src="images/item.jpg" alt="photo">
                                                </div>
                                                <div class="product__title">
                                                    <h3>iPhone X 64Gb Silver</h3>
                                                    <p>820$</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="wrap-btn text-center">
                                            <a href="#">Додати у кошик</a>
                                        </div>                                         
                                    </div>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <div class="product-item-card">
                                        <a href="#" class="product__link">
                                            <div class="wrapping">
                                                <div class="product__photo">
                                                    <img src="images/item.jpg" alt="photo">
                                                </div>
                                                <div class="product__title">
                                                    <h3>iPhone X 64Gb Silver</h3>
                                                    <p>820$</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="wrap-btn text-center">
                                            <a href="#">Додати у кошик</a>
                                        </div>                                         
                                    </div>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <div class="product-item-card">
                                        <a href="#" class="product__link">
                                            <div class="wrapping">
                                                <div class="product__photo">
                                                    <img src="images/item.jpg" alt="photo">
                                                </div>
                                                <div class="product__title">
                                                    <h3>iPhone X 64Gb Silver</h3>
                                                    <p>820$</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="wrap-btn text-center">
                                            <a href="#">Додати у кошик</a>
                                        </div>                                         
                                    </div>
                                </div>                                 
                            </div>                                                        
                        </div>
                    </div>
                    <div class="sentences-content__tab tab-pane fade" id="batteries" role="tabpanel" aria-labelledby="batteries-tab">
                        <div class="wrapper magic-slider">
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <div class="product-item-card">
                                        <a href="#" class="product__link">
                                            <div class="wrapping">
                                                <div class="product__photo">
                                                    <img src="images/item.jpg" alt="photo">
                                                </div>
                                                <div class="product__title">
                                                    <h3>iPhone X 64Gb Silver</h3>
                                                    <p>820$</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="wrap-btn text-center">
                                            <a href="#">Додати у кошик</a>
                                        </div>                                         
                                    </div>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <div class="product-item-card">
                                        <a href="#" class="product__link">
                                            <div class="wrapping">
                                                <div class="product__photo">
                                                    <img src="images/item.jpg" alt="photo">
                                                </div>
                                                <div class="product__title">
                                                    <h3>iPhone X 64Gb Silver</h3>
                                                    <p>820$</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="wrap-btn text-center">
                                            <a href="#">Додати у кошик</a>
                                        </div>                                         
                                    </div>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <div class="product-item-card">
                                        <a href="#" class="product__link">
                                            <div class="wrapping">
                                                <div class="product__photo">
                                                    <img src="images/item.jpg" alt="photo">
                                                </div>
                                                <div class="product__title">
                                                    <h3>iPhone X 64Gb Silver</h3>
                                                    <p>820$</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="wrap-btn text-center">
                                            <a href="#">Додати у кошик</a>
                                        </div>                                         
                                    </div>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <div class="product-item-card">
                                        <a href="#" class="product__link">
                                            <div class="wrapping">
                                                <div class="product__photo">
                                                    <img src="images/item.jpg" alt="photo">
                                                </div>
                                                <div class="product__title">
                                                    <h3>iPhone X 64Gb Silver</h3>
                                                    <p>820$</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="wrap-btn text-center">
                                            <a href="#">Додати у кошик</a>
                                        </div>                                         
                                    </div>
                                </div>                                 
                            </div>                                                        
                        </div>
                    </div>
                    <div class="sentences-content__tab tab-pane fade" id="charging" role="tabpanel" aria-labelledby="charging-tab">
                        <div class="wrapper magic-slider">
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <div class="product-item-card">
                                        <a href="#" class="product__link">
                                            <div class="wrapping">
                                                <div class="product__photo">
                                                    <img src="images/item.jpg" alt="photo">
                                                </div>
                                                <div class="product__title">
                                                    <h3>iPhone X 64Gb Silver</h3>
                                                    <p>820$</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="wrap-btn text-center">
                                            <a href="#">Додати у кошик</a>
                                        </div>                                         
                                    </div>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <div class="product-item-card">
                                        <a href="#" class="product__link">
                                            <div class="wrapping">
                                                <div class="product__photo">
                                                    <img src="images/item.jpg" alt="photo">
                                                </div>
                                                <div class="product__title">
                                                    <h3>iPhone X 64Gb Silver</h3>
                                                    <p>820$</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="wrap-btn text-center">
                                            <a href="#">Додати у кошик</a>
                                        </div>                                         
                                    </div>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <div class="product-item-card">
                                        <a href="#" class="product__link">
                                            <div class="wrapping">
                                                <div class="product__photo">
                                                    <img src="images/item.jpg" alt="photo">
                                                </div>
                                                <div class="product__title">
                                                    <h3>iPhone X 64Gb Silver</h3>
                                                    <p>820$</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="wrap-btn text-center">
                                            <a href="#">Додати у кошик</a>
                                        </div>                                         
                                    </div>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <div class="product-item-card">
                                        <a href="#" class="product__link">
                                            <div class="wrapping">
                                                <div class="product__photo">
                                                    <img src="images/item.jpg" alt="photo">
                                                </div>
                                                <div class="product__title">
                                                    <h3>iPhone X 64Gb Silver</h3>
                                                    <p>820$</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="wrap-btn text-center">
                                            <a href="#">Додати у кошик</a>
                                        </div>                                         
                                    </div>
                                </div>                                 
                            </div>                                                        
                        </div>
                    </div>
                    <div class="sentences-content__tab tab-pane fade" id="wireless_charging" role="tabpanel" aria-labelledby="wireless_charging-tab">
                        <div class="wrapper magic-slider">
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <div class="product-item-card">
                                        <a href="#" class="product__link">
                                            <div class="wrapping">
                                                <div class="product__photo">
                                                    <img src="images/item.jpg" alt="photo">
                                                </div>
                                                <div class="product__title">
                                                    <h3>iPhone X 64Gb Silver</h3>
                                                    <p>820$</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="wrap-btn text-center">
                                            <a href="#">Додати у кошик</a>
                                        </div>                                         
                                    </div>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <div class="product-item-card">
                                        <a href="#" class="product__link">
                                            <div class="wrapping">
                                                <div class="product__photo">
                                                    <img src="images/item.jpg" alt="photo">
                                                </div>
                                                <div class="product__title">
                                                    <h3>iPhone X 64Gb Silver</h3>
                                                    <p>820$</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="wrap-btn text-center">
                                            <a href="#">Додати у кошик</a>
                                        </div>                                         
                                    </div>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <div class="product-item-card">
                                        <a href="#" class="product__link">
                                            <div class="wrapping">
                                                <div class="product__photo">
                                                    <img src="images/item.jpg" alt="photo">
                                                </div>
                                                <div class="product__title">
                                                    <h3>iPhone X 64Gb Silver</h3>
                                                    <p>820$</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="wrap-btn text-center">
                                            <a href="#">Додати у кошик</a>
                                        </div>                                         
                                    </div>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <div class="product-item-card">
                                        <a href="#" class="product__link">
                                            <div class="wrapping">
                                                <div class="product__photo">
                                                    <img src="images/item.jpg" alt="photo">
                                                </div>
                                                <div class="product__title">
                                                    <h3>iPhone X 64Gb Silver</h3>
                                                    <p>820$</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="wrap-btn text-center">
                                            <a href="#">Додати у кошик</a>
                                        </div>                                         
                                    </div>
                                </div>                                 
                            </div>                                                        
                        </div>
                    </div>
                    <div class="sentences-content__tab tab-pane fade" id="glasses" role="tabpanel" aria-labelledby="glasses-tab">
                        <div class="wrapper magic-slider">
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <div class="product-item-card">
                                        <a href="#" class="product__link">
                                            <div class="wrapping">
                                                <div class="product__photo">
                                                    <img src="images/item.jpg" alt="photo">
                                                </div>
                                                <div class="product__title">
                                                    <h3>iPhone X 64Gb Silver</h3>
                                                    <p>820$</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="wrap-btn text-center">
                                            <a href="#">Додати у кошик</a>
                                        </div>                                         
                                    </div>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <div class="product-item-card">
                                        <a href="#" class="product__link">
                                            <div class="wrapping">
                                                <div class="product__photo">
                                                    <img src="images/item.jpg" alt="photo">
                                                </div>
                                                <div class="product__title">
                                                    <h3>iPhone X 64Gb Silver</h3>
                                                    <p>820$</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="wrap-btn text-center">
                                            <a href="#">Додати у кошик</a>
                                        </div>                                         
                                    </div>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <div class="product-item-card">
                                        <a href="#" class="product__link">
                                            <div class="wrapping">
                                                <div class="product__photo">
                                                    <img src="images/item.jpg" alt="photo">
                                                </div>
                                                <div class="product__title">
                                                    <h3>iPhone X 64Gb Silver</h3>
                                                    <p>820$</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="wrap-btn text-center">
                                            <a href="#">Додати у кошик</a>
                                        </div>                                         
                                    </div>
                                </div>                                 
                            </div>
                            <div class="wrapper-col">
                                <div class="wrap-product-item">
                                    <div class="product-item-card">
                                        <a href="#" class="product__link">
                                            <div class="wrapping">
                                                <div class="product__photo">
                                                    <img src="images/item.jpg" alt="photo">
                                                </div>
                                                <div class="product__title">
                                                    <h3>iPhone X 64Gb Silver</h3>
                                                    <p>820$</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="wrap-btn text-center">
                                            <a href="#">Додати у кошик</a>
                                        </div>                                         
                                    </div>
                                </div>                                 
                            </div>                                                        
                        </div>
                    </div>                                                            
                </div>
                <div class="wrap-btn">
                    <a href="#" class="button">смотреть больше</a>
                </div>                                 
            </div>
        </div>
    </section> 
    <tabs-wrapper class="mt-5">
      <tab-item title="Новинки">Tab 1</tab-item>
      <tab-item title="Популярні товари">Tab 2</tab-item>     
      <tab-item title="Знижки">Tab 3</tab-item>        
    </tabs-wrapper>           
  </div>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import ProductCard from '@/components/ProductCard.vue';
  import TabsWrapper from '@/components/TabsWrapper.vue';
  import TabItem from '@/components/TabItem.vue';

  export default {
    components: {
        Swiper,
        SwiperSlide,
        ProductCard,
        TabItem,
        TabsWrapper
    }
  }
</script>

<style lang="scss">
  @import  '@/assets/scss/vars.module.scss';
  // Main slider

  .main-slider{
      margin: 30px 0;
      line-height: 0;
      box-shadow: 10px 10px 60px rgba(0,0,0,0.2);
      &__slide{
          position: relative;
          a{
            width:100%;
          }
          img{
              width: 100%;
              z-index: 1;
          }   
      }
      &__text{
          position: absolute;
          height: 100%;
          display: flex;
          align-items: center;
          top:0;
          left:0;
          z-index: 2;
          padding-left: 10%;
          p{
              font-size: 40px;
              line-height: 1.2em;
              color:#000;
              font-weight: 700;
              margin:0;
              span{
                  color:#fff;
                  background: #835301;
                  display: inline-block;
                  line-height: 1em;
                  padding: 2px 15px 5px;
                  border-radius: 25px;
              }            
          }
      }
      a{
          display: inline-block;
          text-decoration: none;
          color:#000;
      }
      .slick-arrow{
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          width:20px;
          height: 80px;
          transform: translateY(-50%);
          background: $mainColor;
          font-size: 20px;
          color:#fff;
          top:50%;
          z-index: 2;
          cursor: pointer;
          transition:300ms;
          &:hover{
              background: lighten($mainColor, 10%);
          }
      }
      .slick-prev{
          left:0;
      }
      .slick-next{
          right:0;
      }
  }
</style>
