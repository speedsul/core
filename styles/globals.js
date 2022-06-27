import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;/*propriedade nos permite incluir o preenchimento e a borda na largura e altura totais de um elemento. */
    font-family: 'Poppins', sans-serif;
}
body{
    display: flex;
    justify-content: left;
    align-items: center;
    min-height: 100vh;
    background: #2d2d2d;
}
.navigation{
    position: relative;
    height: 100vh;
    background-color:#424242 ;
    width: 70px;
    box-shadow: 10px 0 0 #18C0D4;
    border-left: 10px solid #424242 ;
    overflow-x: hidden;
    transition: 0.5s;
}
.navigation:hover{
    width: 300px;
}
.navigation ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-left: 5px;
    padding-top: 40px;;
}
.navigation ul li{
    position: relative;
    list-style: none;
    width: 100%;
    border-top-left-radius:20px ;
    border-bottom-left-radius:20px ;
}
.navigation ul li a {
    position: relative;
    display: flex;
    width: 100%;
    text-decoration: none;
    color: #fff;
}
.navigation ul li a img{
    display: block;
    position: relative;
    bottom: 20px;
}
.navigation ul li a .icon {
    position: relative;
    display: block;
    min-width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
}
.navigation ul li a .icon ion-icon {
    position: relative;
    font-size: 1.5rem;
    z-index: 1;
}
.navigation ul li a .title{
    position: relative;
    display: block;
    padding-left: 10px;
    height: 60px;
    line-height: 60px;
    white-space: nowrap;
} 
.navigation ul li a:hover{
   color: #18C0D4;
}
.navigation ul li.active{
    background:#18C0D4 ;
}
.navigation ul li.active a:hover{
    color: #fff;
}
.navigation ul li.active a::before{
    content: '';
    position: absolute;
    top: -30px;
    right: 0;
    width: 30px;
    height: 30px;
    background: #424242;
    border-radius: 50%;
    box-shadow: 15px 15px 0 #18C0D4;
}
.navigation ul li.active a::after{
    content: '';
    position: absolute;
    bottom: -30px;
    right: 0;
    width: 30px;
    height: 30px;
    background: #424242;
    border-radius: 50%;
    box-shadow: 15px -15px 0 #18C0D4;
}
.main{
    display: flex;
    margin: 0 auto;
}
`
