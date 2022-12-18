import styled from "styled-components";
import headerBgImg from "../images/bg-hero-desktop.svg";


export const HeaderContainer = styled.header`
    max-width: 100%;
    margin: 0;
    height: 620px;
    padding: 50px;
    background-color: #ebfbff;
    background-image: url(${headerBgImg});
    background-repeat: no-repeat;
    background-size: cover;
`

export const Button = styled.button`
    width: ${props => props.size};
    border-radius: 15px;
    padding: ${props => props.padding};
    background-color: ${props => props.bg === "white" ? "white" : "hsl(322, 100%, 66%)"};
    color: ${props => props.color};
    display: block;
    cursor: pointer;
    font-size: ${props => props.fontSize};
    font-weight: bold;
    border: 0;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export const HeaderLogo = styled.img`

`

export const HeaderTopWrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 40px 0 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const HeroWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const HeroCtaWrapper = styled.div`
    width: 40%;
    height: auto;
    text-align: start;
    justify-content: space-between;
`

export const HeaderImage = styled.img`
    width: 50%;
`

export const HeaderCtaHeading = styled.h2`
    line-height: 1.5;
    font-size: 3rem;
    text-transform: capitalize;
    margin-top: 85px;
`

export const Text = styled.p`
    font-size: ${props => props.size};
    margin-bottom: 30px;
    margin-top: -20px;
    padding-right: 20px;
    line-height: 1.3;
    color: ${props => props.color};
`