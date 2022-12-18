import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";

const Container = styled.footer`
    width: 100%;
    max-width: 100%;
    height: 600px;
    position: relative;
    bottom: 0;
    background-color: #393E46;
`

const Content = styled.div`
    width: 80%;
    height: 400px;
    padding-top: 50px;
    outline: 1px solid red;
    margin: 0 auto;
    position: relative;
`

const Copyright = styled.div`
    width: 100%;
    text-align: end;
    position: absolute;
    bottom: 0;
    color: white;
`

export { Container, Content, Copyright }