import React from "react";
import { mainData } from "../data";
import { 
    Tile,
    MainWrapper,
    TileHeading,
    TileImage,
    TileTextWrapper } from "../styled/Main.styled";
import { Text } from "../styled/Header.styled";


export default function Main() {
    return(
        <MainWrapper>
            {mainData.map(tile => {
                if(!(tile.id % 2)){
                    return (
                        <Tile key={tile.id}>
                            <TileImage src={tile.image} alt="tile-image"/>

                            <TileTextWrapper>
                                <TileHeading>{tile.heading}</TileHeading>
                                <Text color="#524A4E">{tile.text}</Text>
                            </TileTextWrapper>
                        </Tile>
                    )
                }
                return (
                    <Tile key={tile.id}>
                        <TileTextWrapper>
                            <TileHeading>{tile.heading}</TileHeading>
                            <Text color="#524A4E">{tile.text}</Text>
                        </TileTextWrapper>
                        
                        <TileImage src={tile.image} alt="tile-image"/>
                    </Tile>
                )
            })}
        </MainWrapper>
    )
}