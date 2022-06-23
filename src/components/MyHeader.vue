<template>
    <header class="header">
        <div class="top-block">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-lg-3">
                        <div class="logo">
                            <a href="#" @click="$router.push('/')"><img src="@/assets/images/logo_v.svg" alt="logo"></a>
                        </div>
                    </div>
                    <div class="col-12 col-lg-9 col-xl-9 information-hidden-block">
                        <div class="information-block-wrapper">
                            <div class="information-block">
                                <div class="information-block__icon">
                                    <img src="@/assets/images/phone.svg" alt="icon">
                                </div>
                                <div class="information-block__text">
                                    <h4>Телефонуйте</h4>
                                    <a href="tel:+38 (067) 123-45-67">+38 (067) 123-45-67</a>
                                </div>
                            </div>
                            <div class="information-block">
                                <div class="information-block__icon">
                                    <img src="@/assets/images/clock.svg" alt="icon">
                                </div>
                                <div class="information-block__text">
                                    <h4>Пишіть</h4>
                                    <a href="mailto:info@mobitrade.com.ua">info@mobitrade.com.ua</a>
                                </div>                        
                            </div>
                            <div class="information-block">
                                <div class="information-block__icon">
                                    <img src="@/assets/images/mail.svg" alt="icon">
                                </div>
                                <div class="information-block__text">
                                    <h4>Ми працюємо</h4>
                                    <p>Пн. - Сб.:  09<sup>00</sup> - 19<sup>00</sup></p>
                                </div>                          
                            </div>
                            <div class="header-social-block">
                                <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-square" /></a>
                                <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                                <a href="#"><font-awesome-icon icon="fa-brands fa-telegram" /></a>
                            </div>                             
                        </div>                       
                    </div>
                </div>
            </div>         
        </div>
        <div class="menu">
            <div class="container">
                <div class="search-field"><form action=""><input type="text" placeholder="поиск товаров"></form> </div>
                <div class="row align-items-center">
                    <div class="col-4 d-lg-none order_block-1">
                        <font-awesome-icon icon="fa-solid fa-bars" class="colapse-menu-button"/>
                    </div>
                    <div class="col-12 col-lg-9 col-xl-8 order_block-2 wrap-magic-menu-logo">
                        <div class="magic-menu-logo">
                            <a href="#"><img src="@/assets/images/white-logo_v.svg" alt="logo"></a>
                        </div>                        
                        <my-menu></my-menu>                       
                    </div>
                    <div class="col-8 col-lg-3 col-xl-4 order_block-3">
                        <div class="menu__block">
                            <div class="magic-info-btn"><a href="#"><font-awesome-icon icon="fa-solid fa-phone" /></a> </div>
                            <a href="#" class="menu__search"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></a>
                            <a href="#" class="menu__basket"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">

    @import '@/assets/scss/vars.module.scss';

    header{
        // position: fixed;
        // top:0;
        // left:0;
        width:100%;
        background: #f5f5f5;
        z-index: 2;
        transform: translateY(0px);
        transition:0.4s;
        .container{
            position: relative;
        }
        .logo{
            a{
                img{
                    width:180px;
                }
            }
        }
    }

    .scroll-disable{
        overflow: hidden;
    }

    .search-field{
        position: absolute;
        width:365px;
        height:60px;
        top:60px;
        right:80px;
        content:'';
        background: #333;
        z-index: 100;
        form{
            width: 100%;
            height: 100%;
            padding: 13px;
        }
        input{
            width:100%;
            height: 100%;
            border:none;
            background: #ffffff url('@/assets//images/search.png') no-repeat center right 10px;
            padding: 0 25px 0 10px;
            outline: none;
            font-style: italic;
            color:#666;                
        }
    } 
    
    .top-block{
        position: relative;
        padding: 30px 0;
    }

    .magic-info-btn{
        display: none;
        width: 65px;
        height: 60px;
        border-left:1px solid rgba(255,255,255,0.5);    
        a{
            display: flex;
            width:100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            svg{
                font-size: 22px;
                color:#fff;
                transition:0.2s;
            }
            &:hover{
                text-decoration: none;
                svg{
                    opacity: 0.7;
                    font-size: 26px;
                }            
            }         
        }
    }

    .information-block-wrapper{
        display: flex;
    }

    .information-block{
        display: flex;
        align-items: center;
        width:calc(100%/3);
        &__icon{
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
        }
        &__text{
            h4{
                font-size: 14px;
                line-height: 1.2em;
                font-weight: 700;
                text-transform: uppercase;
                margin:0 0 5px;
            }
            p{
                font-size: 14px;
                line-height: 1.2em;
                font-weight: 400;
                color:#666;
                margin:0;            
            }
            a{
                font-size: 14px;
                line-height: 1.2em;
                font-weight: 400;
                color:#666;
                margin:0;
                text-decoration: none;
            }
        }
    }

    .header-social-block{
        display: flex;
        align-items: center;
        flex-direction: column;
        a{
            display: block;
            font-size: 17px;
            color:#000;
            transition: 0.2s;
            &:hover{
                color: lighten(#000, 40%);
            }
        }
    }

    .mobile-information{
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
        position: fixed;
        top:0;
        right:0;
        width:300px;
        height: 100%;
        background:rgba(255,255,255,0.95);
        z-index: 102;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        display: none;
        .close-btn{
            position: absolute;
            top:15px;
            right:15px;
            cursor: pointer;
            font-size: 22px;
            color:#000;
        }       
        .mobile-information-block{
            display: flex;
            align-items: center;
            width:100%;
            padding: 30px 25px 25px;
            &__icon{
                width: 35px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 15px;
            }
            &__text{
                h4{
                    font-size: 14px;
                    line-height: 1.2em;
                    font-weight: 700;
                    text-transform: uppercase;
                    margin:0 0 5px;
                }
                p{
                    font-size: 14px;
                    line-height: 1.2em;
                    font-weight: 400;
                    color:#666;
                    margin:0;
                }
                a{
                    font-size: 14px;
                    line-height: 1.2em;
                    font-weight: 400;
                    color:#666;
                    margin:0;
                    text-decoration: none;                
                }
            }
        }
        .mobile-social-block{
            display: flex;
            align-items: center;
            justify-content: center;
            padding:40px 15px 15px;
            list-style: none;
            li{
                margin-right: 20px;
                a{
                    text-decoration: none;
                    i{
                        font-size: 32px;
                        color:#000;
                    }
                }
            }
        }     
    }

    .mega-menu{
        display: none;
        width: 100%;
        padding-top: 15px;
        padding-bottom: 30px;
        background: #f5f5f5;
        ul{
            display: flex;
            align-items: center;
            justify-content: center;
            
            padding: 0;
            margin: 0;
            li{
                list-style: none;
                text-align: center;
                a{
                    display: block;
                    margin:0 15px;
                    text-decoration: none;
                    .icon{
                        margin-bottom: 20px;
                        height: 80px;
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        justify-content: flex-end;
                        img{
                            max-width: 100%;
                        }
                    }
                    span{
                        font-size: 12px;
                        color:#333;
                    }                
                }
            }          
        }
    
    }

    .magicMenuFixed{
        width:100%;
        position: fixed;
        top:0;
        left:0;
        z-index: 101;
        transform: translateY(-117px);
    }

    .wrap-magic-menu-logo{
        display: flex;
        align-items: center;
    }

    .magic-menu-logo{
        margin-right: 20px;
        display:none;
        a{
            img{
                width:100px;
            }
        }
    }

    .mobile-menu{
        display: none;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
        position: fixed;
        top:0;
        left:0;
        width:300px;
        height: 100%;
        background:rgba(255,255,255,0.95);
        z-index: 102;
        overflow-y: auto; 
        .close-btn{
            position: absolute;
            top:15px;
            right:15px;
            cursor: pointer;
            font-size: 22px;
            color:#000;
        }
        .mobile-menu-list{
            display: flex;
            flex-direction: column;
            padding: 30px 25px;     
            li{
                list-style: none;
                
                border-bottom: 1px solid #aaa;
                a{
                    display: block;
                    padding: 17px 0;
                    font-size: 16px;
                    line-height: 1.2em;
                    font-weight: 400;
                    color:#000;
                    text-decoration: none;
                    transition:0.3s;
                    &:hover{
                        opacity: 0.7;
                    }
                }
            }
        } 
    }

    .mobile-catalog-sidebar{
        display: none;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
        position: fixed;
        top:0;
        right:0;
        width:300px;
        height: 100%;
        background:rgba(255,255,255,0.95);
        z-index: 102;
        overflow-y: auto; 
        padding: 60px 25px 25px;    
        .close-btn{
            position: absolute;
            top:15px;
            right:15px;
            font-size: 22px;
            color: #333;
            cursor: pointer;
        }
        .catalog__title{
            &+div{
                display: none;
            }
            &:after{
                position: absolute;
                top:50%;
                transform: translateY(-50%);
                right:5px;
                content:'\f067';
                font-family: "Font Awesome 5 Pro";
                font-size: 12px;
            }
            h2{
                font-size: 18px;
                font-weight: 700;
                color:#999;
                text-transform: uppercase;
                margin:0;
                span{
                    text-transform: lowercase;
                }
            }
            &.active{
                &:after{
                content:'\f068'; 
                }
            }        
        }
        .catalog__slider{
            max-width: 300px;
            &-elements{
                display: flex;
                align-items: center;
                justify-content: space-between;
                #input2-with-keypress-0{
                    width: 60px;
                    height: 30px;
                    border-radius: 5px;
                    border: solid 1px #dddddd;
                    background-color: #ffffff;
                    padding: 0 5px;
                    outline: none;
                }
                #input2-with-keypress-1{
                    width: 70px;
                    height: 30px;
                    border-radius: 5px;
                    border: solid 1px #dddddd;
                    background-color: #ffffff;
                    padding: 0 5px;
                    outline: none;
                }
                button{
                    width: 40px;
                    height: 30px;
                    border-radius: 5px;
                    color:#fff;
                    background-color: #f9a519;
                    border:none;
                    outline: none;
                    transition:300ms;
                    &:hover{
                        background: lighten(#f9a519, 10%);
                    }                                
                }                        
            }
        }        
    }   
</style>