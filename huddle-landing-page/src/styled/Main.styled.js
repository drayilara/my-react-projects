import styled from "styled-components";

export const Tile = styled.div`
    width: 90%;
    min-width: 90%;
    height: 33.3%;
    margin: 0 auto;
    margin-top: 30px;
    padding: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;    
`

export const MainWrapper = styled.main`
    max-width: 90%;
    min-height: 800px;
    margin: 0 auto;
    margin-top: 80px;
`

export const TileTextWrapper = styled.div`
    text-align: start;
    padding: 100px;
`

export const TileHeading = styled.h3`
    text-transform: capitalize;
    font-weight: 700px;
    margin-bottom: 25px;
`

export const TileImage = styled.img`
    max-width: 40%;
    width: 40%;
`
