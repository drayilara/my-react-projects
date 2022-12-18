import React from "react";
import { Container, Content, Copyright } from "../styled/Footer.styled";
import Logo from "../images/logo.svg";
import { 
    footerLogoArea, 
    footerLinksAbout, 
    footerLinksCareer, 
    footerSocialArea } from "../data";


function Footer() {

    return(
        <Container>
            <Content>
                

                <Copyright>&copy Ayilara Sodiq 2022.</Copyright>
            </Content>
        </Container>
    )
}

export default Footer;