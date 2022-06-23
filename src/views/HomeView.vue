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
  </div>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  export default {
    components: {
      Swiper,
      SwiperSlide,
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
          img{
              max-width: 100%;
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
