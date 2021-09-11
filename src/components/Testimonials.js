import React from "react";
import styled from "styled-components";
import {useStaticQuery, graphql} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {IoMdCheckmarkCircleOutline} from "react-icons/io";
import {FaRegLightbulb} from "react-icons/fa";

const TestimonialsContainer = styled.div`
    width: 100%;
    background: #fcfcfc;
    color: #000;
    padding: 5rem calc((100vw - 1300px) / 2);
    height: 100%;
`;

const TopLine = styled.div`
    color: #077bf1;
    font-size: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
`;

const Description = styled.div`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: bold;
`;

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ColumnOne = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
`;

const ColumnTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    grid-gap: 10px;

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`;

const Testimonial = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;

    h3 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-style: italic;
    }
    p {
        color: #3b3b3b;
    }
`;

const Images = styled(GatsbyImage)`
    border-radius: 10px;
    height: 100%;
`;

const Testimonials = () => {
    const data = useStaticQuery(graphql`
        query {
            allFile(
                filter: {
                    ext: {regex: "/(jpg)|(png)|(jpeg)/"}
                    name: {in: ["girl", "man"]}
                }
            ) {
                edges {
                    node {
                        childImageSharp {
                            fluid {
                                src
                            }
                            gatsbyImageData(width: 800)
                        }
                        name
                    }
                }
            }
        }
    `);

    const renderImages = images => {
        return images.allFile.edges.map((img, index) => {
            let image = getImage(img.node.childImageSharp.gatsbyImageData);
            return <Images image={image} key={index} alt={img.node.name} />;
        });
    };

    return (
        <TestimonialsContainer>
            <TopLine>Отзывы</TopLine>
            <Description>Отзывы путешественников</Description>
            <ContentWrapper>
                <ColumnOne>
                    <Testimonial>
                        <IoMdCheckmarkCircleOutline
                            style={{
                                color: "#3fffa8",
                                fontSize: "2rem",
                                marginBottom: "1rem",
                            }}
                        />
                        <h3>Алиса Миллер</h3>
                        <p>
                            "Кайфую, вау жеш. Побывала в Греции, на Кипре,
                            на острове Родос. Незабываемые впечатления."
                        </p>
                    </Testimonial>
                    <Testimonial>
                        <FaRegLightbulb
                            style={{
                                color: "#f9b19b",
                                fontSize: "2rem",
                                marginBottom: "1rem",
                            }}
                        />
                        <h3>Мужик из Инглвуда</h3>
                        <p>
                            "Хороший отдых, побывал во всех странах западной Европы.
                            Обращайтесь к Винсенту Вега."
                        </p>
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo>{renderImages(data)}</ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
    );
};

export default Testimonials;
