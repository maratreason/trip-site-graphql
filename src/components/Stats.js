import React from 'react';
import styled from "styled-components";

import {statsData} from "../data/statsData";

const StatContainer = styled.div`
    width: 100%;
    background: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem calc((100vw - 1300px) / 2);
`;

const StatsTitle = styled.h3`
    text-align: start;
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 3rem;
    padding: 0 2rem;
`;

const StatsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`;

const StatsBox = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem;
`;

const StatsBoxIcon = styled.div`
    font-size: 3rem;
    margin-bottom: 1rem;
`;

const StatsBoxTitle = styled.div`
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin-bottom: 0.5rem;
`;

const StatsBoxDesc = styled.p`
    font-size: 1.5rem;
`;

const Stats = () => {
    return (
        <StatContainer>
            <StatsTitle>Почемы выбирают нас?</StatsTitle>
            <StatsWrapper>
                {statsData && statsData.map(el => {
                    return <StatsBox key={el.id}>
                        <StatsBoxIcon style={{color: el.iconColor}}>{el.icon}</StatsBoxIcon>
                        <StatsBoxTitle>{el.title}</StatsBoxTitle>
                        <StatsBoxDesc>{el.desc}</StatsBoxDesc>
                    </StatsBox>
                })}
            </StatsWrapper>
        </StatContainer>
    )
}

export default Stats
