import React from "react";
import { 
    HeaderContainer, 
    HeaderLogo, 
    Button, 
    HeaderTopWrapper, 
    HeroWrapper, 
    HeroCtaWrapper, 
    HeaderImage, 
    HeaderCtaHeading, 
    Text } from "../styled/Header.styled";
import Logo from "../images/logo.svg";
import HeaderImg from "../images/illustration-mockups.svg";

export default function Header(){
   return(
   <HeaderContainer>
        <HeaderTopWrapper>
          <HeaderLogo src={Logo} alt="logo" />
          <Button fontSize="12px" color="black" bg="white" size="150px" padding="10px">Try It Free</Button>  
        </HeaderTopWrapper>

        <HeroWrapper>
          <HeroCtaWrapper>
            <HeaderCtaHeading>
              Build the community <br />
              your fans will love
            </HeaderCtaHeading>
            <Text size="20px" color="black">
              Huddle re-imagines the way we build communities. 
              You have a voice but so does your audience. 
              Create connections with your audience as you engage in meaningful conversations.
            </Text>
            <Button fontSize="12px" color="white" size="200px" bg="hsl(322, 100%, 66%)" padding="12px">Get Started For Free</Button>
          </HeroCtaWrapper>
          <HeaderImage src={HeaderImg} alt="laptop-and-phone-img" />
        </HeroWrapper>
    </HeaderContainer>
   )
}