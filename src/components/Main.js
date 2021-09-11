import React from 'react'
import styled from "styled-components";
import { Button } from './UI/Button';
import Video from "../assets/videos/travel.mp4";

const Container = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-top: -80px;
    padding: 0 1rem;
    position: relative;
    color: #fff;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%
        ), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    }
`;

const MainBackground = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const VideoBackground = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`;

const MainContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
`;

const MainItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;
`;

const MainTitle = styled.h1`
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    font-weight: bold;
    padding: 0 1rem;
`;

const MainText = styled.p`
    font-size: clamp(1rem, 3vw, 2rem);
    margin-bottom: 2rem;
    font-weight: 400;
`;

const Main = () => {
    return (
        <Container>
            <MainBackground>
                <VideoBackground src={Video} type="video/mp4" autoPlay loop muted playsInline />
            </MainBackground>
            <MainContent>
                <MainItems>
                    <MainTitle>Необычные путешествия</MainTitle>
                    <MainText>По всему свету</MainText>
                    <Button big="true" primary="true" round="true" to="/">Начать Тур</Button>
                </MainItems>
            </MainContent>
        </Container>
    )
}

export default Main
