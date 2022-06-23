<template>
    <footer class="footer">
        <div class="top-block block_modify">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-lg-3">
                        <div class="logo small_logo">
                            <a href="#" @click="$router.push('/')"><img src="@/assets/images/logo_v.svg" alt="logo"></a>
                        </div>
                    </div>
                    <div class="col-12 col-lg-9 col-xl-8 offset-xl-1 ">
                        <div class="information-block-wrapper">
                            <div class="information-block">
                                <div class="information-block__icon">
                                    <img src="@/assets/images/icon_1.png" alt="icon">
                                </div>
                                <div class="information-block__text">
                                    <h4>Телефонуйте</h4>
                                    <a href="tel:+38 (067) 123-45-67">+38 (067) 123-45-67</a>
                                </div>
                            </div>
                            <div class="information-block">
                                <div class="information-block__icon">
                                    <img src="@/assets/images/icon_2.png" alt="icon">
                                </div>
                                <div class="information-block__text">
                                    <h4>Пишіть</h4>
                                    <a href="mailto:info@mobitrade.com.ua">info@mobitrade.com.ua</a>
                                </div>                        
                            </div>
                            <div class="information-block">
                                <div class="information-block__icon">
                                    <img src="@/assets/images/icon_3.png" alt="icon">
                                </div>
                                <div class="information-block__text">
                                    <h4>Ми працюємо</h4>
                                    <p>Пн. - Сб.:  09<sup>00</sup> - 19<sup>00</sup></p>
                                </div>                          
                            </div>                             
                        </div>                       
                    </div>
                </div>
                <hr>
            </div>            
        </div>
        <div class="menu footer_menu">
            <div class="container">
                <div class="row">
                    <div class="col-12  col-xl-8 offset-xl-2">
                        <my-menu></my-menu>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .footer{
        background: url('@/assets/images/bg_footer.png') no-repeat center;
        background-size: cover;
        padding-top: 100px;
        .logo{
            a{
                img{
                    width:130px;
                }
            }
        }
        .menu{
            background: none;
            box-shadow: none;
            padding: 18px 0;
            .menu__list{
                justify-content: space-around;
                a{
                    font-size: 14px;
                }  
            }
        }        
    }

    .block_modify{
        padding-top: 0px;
        padding-bottom: 0;
        hr{
            height: 1px;
            background: rgba(204,204,204,1);
            border:none;
            margin-top: 40px;
            margin-bottom: 0;
        }
        .small_logo{
            a{
                display: inline-block;
            }
        }
        .information-block__text{
            h4{
                color:#fff;
            }
        }
    }
</style>