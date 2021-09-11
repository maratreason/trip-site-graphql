import React from "react";
import styled from "styled-components";
import {useStaticQuery, graphql} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {Button} from "./UI/Button";
import {ImLocation} from "react-icons/im";

const ProductsContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    color: #fff;
`;

const ProductsTitle = styled.h2`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`;

const ProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 2rem;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 868px) {
        grid-template-columns: 1fr;
    }
`;

const ProductCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    transition: 0.2s ease;
`;

const ProductImg = styled(GatsbyImage)`
    height: 100%;
    max-width: 100%;
    position: absolute;
    border-radius: 10px;
    filter: brightness(70%);
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
        filter: brightness(100%);
    }
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;

    @media screen and (max-width: 280px) {
        padding: 0 1rem;
    }
`;

const TetxtWrap = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 375px;
`;

const ProductTitle = styled.h3`
    font-weight: 400;
    font-size: 1rem;
    margin-left: 0.5rem;
`;

const Trips = ({heading}) => {
    const graphData = useStaticQuery(graphql`
        query TripsQuery {
            allTripsJson {
                edges {
                    node {
                        id
                        alt
                        name
                        img {
                            childImageSharp {
                                gatsbyImageData(width: 800)
                            }
                        }
                        button
                    }
                }
            }
        }
    `);

    const getTrips = data => {
        const tripsArray = [];
        data.allTripsJson.edges.forEach(trip => {
            let image = getImage(trip.node.img.childImageSharp.gatsbyImageData);
            tripsArray.push(
                <ProductCard key={trip.node.id}>
                    <ProductImg image={image} alt={trip.node.alt} />
                    <ProductInfo>
                        <TetxtWrap>
                            <ImLocation />
                            <ProductTitle>{trip.node.name}</ProductTitle>
                        </TetxtWrap>
                        <Button
                            to="/"
                            primary="true"
                            round="true"
                            style={{
                                position: "absolute",
                                top: "420px",
                                fontSize: "14px",
                            }}
                        >
                            {trip.node.button}
                        </Button>
                    </ProductInfo>
                </ProductCard>,
            );
        });
        return tripsArray;
    };

    return (
        <ProductsContainer>
            <ProductsTitle>{heading}</ProductsTitle>
            <ProductsWrapper>{getTrips(graphData)}</ProductsWrapper>
        </ProductsContainer>
    );
};

export default Trips;
