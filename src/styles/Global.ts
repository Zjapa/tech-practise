import { createGlobalStyle } from "styled-components";
import montserratBlack from "../assets/fonts/Montserrat-Black.woff";
import montserratBold from "../assets/fonts/Montserrat-Bold.woff";
import montserratRegular from "../assets/fonts/Montserrat-Regular.woff";
import oswaldRegular from "../assets/fonts/Oswald-Regular.woff";
import oswaldBold from "../assets/fonts/Oswald-Bold.woff";
import RobotoBold from "../assets/fonts/Roboto-Bold.ttf";
import RobotoBoldItalic from "../assets/fonts/Roboto-BoldItalic.ttf";
import RobotoRegular from "../assets/fonts/Roboto-Regular.ttf";

const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        background-color: ${({ theme }) => theme.colors.background};
        font-family: Roboto-Regular;
        display:flex;
        align-items:center;
        justify-content:center;
        height:100vh;
    }

    h1{
        font-size: 2.5rem;
      
    }

    h2{
        font-size: 2rem;
       
    }
    h3{
        font-size: 1.5rem;
      

    }   
    
    h4{
        font-size: 1rem;
    
    }


    h1,h2,h3,h4{
        font-family: Roboto-Bold;
    }




    @font-face {
        font-family: 'Montserrat-Black' ;
        src: url(${montserratBlack}) format(truetype);
        font-weight: 900;
    }
    @font-face {
        font-family: 'Montserrat-Bold' ;
        src: url(${montserratBold}) format(truetype);
        font-weight: 700;
    }
    @font-face {
        font-family: 'Montserrat-Regular' ;
        src: url(${montserratRegular}) format(truetype);
    }
    @font-face {
        font-family: 'Oswald-Regular' ;
        src: url(${oswaldRegular}) format(truetype);
    }
    @font-face {
        font-family: 'Oswald-Bold' ;
        src: url(${oswaldBold}) format(truetype);
    }
    @font-face {
        font-family: 'Roboto-Bold' ;
        src: url(${RobotoBold}) format(truetype);
    }
    @font-face {
        font-family: 'Roboto-BoldItalic' ;
        src: url(${RobotoBoldItalic}) format(truetype);
    }
    @font-face {
        font-family: 'Roboto-Regular' ;
        src: url(${RobotoRegular}) format(truetype);
    }

`;

export default GlobalStyle;
