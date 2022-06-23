<template>
  <ul class="menu__list">
    <li><router-link to="/">IPhone</router-link></li>
    <li><router-link to="/">IPad</router-link></li>
    <li><router-link to="/">IMac</router-link></li>  
    <li><router-link to="/">Apple Watch</router-link></li>  
    <li><router-link to="/">Аксесуари</router-link></li>       
    <li><router-link to="/">Ремонт</router-link></li>           
    <li><router-link to="/about">Trade IN</router-link></li>
    <li><router-link to="/contacts">Контакти</router-link> </li>
    <!-- <li><a href="#">iPhone</a></li>
    <li><a href="#">iPad</a></li>
    <li><a href="#">iMac</a></li>
    <li><a href="#">Apple Watch</a></li>
    <li><a href="#">Аксесуари</a></li>
    <li><a href="#">Ремонт</a></li>
    <li><a href="#">Trade IN</a></li>
    <li><a href="#">Контакти</a></li> -->
  </ul>  
</template>

<script>
    export default {
        name:'my-menu'
    }
</script>

<style lang="scss">
    .menu{
        background: #000;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
        .colapse-menu-button{
            font-size: 24px;
            color:#fff;
            cursor: pointer;
        }
        &__list{   
            width:100%; 
            padding: 0;
            margin:0;
            display: flex;
            justify-content: space-between;
            li{
                list-style: none;
                a{
                    font-size: 16px;
                    line-height: 1.2em;
                    font-weight: 400;
                    color:#fff;
                    text-decoration: none;
                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
        }
        &__block{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: flex-end;            
        }
        &__search,&__basket{
            width: 65px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-right:1px solid rgba(255,255,255,0.5);
            text-decoration: none;
            i{
                font-size: 22px;
                color:#fff;
                transition:0.3s;
            }
            &:hover{
                text-decoration: none;
                i{
                    opacity: 0.7;
                    transform: scale(1.2);
                }            
            }        
        }
        &__search{
            border-left:1px solid rgba(255,255,255,0.5);
        }
        &__search.active{
            background: #333;
        }    
    }
</style>