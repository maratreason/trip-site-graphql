import React from 'react'
import styled from "styled-components";
import {Link} from "gatsby";

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1100px) / 2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #000;
    background: #fafafa;
`;

const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr;
    }
`;

const ListWrapper = styled.div`
    padding: 0 2rem;

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`;

const FooterTitle = styled.h3`
    margin-bottom: 3rem;
    color: #1e9924;
    font-size: 32px;
`;

const FooterDesc = styled.p`
`;

const FooterLinkList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`;

const FooterLinkTitle = styled.h4`
    font-size: 14px;
    margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #3d3d4e;

    &:hover {
        color: #f26a2e;
        transition: 0.3s ease-out;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <ListWrapper>
                    <FooterTitle>Trip Travel</FooterTitle>
                    <FooterDesc>Мы стремимся создавать лучшие впечатления для наших клиентов</FooterDesc>
                </ListWrapper>
                <FooterLinkList>
                    <FooterLinkTitle>Контакты</FooterLinkTitle>
                    <FooterLink to="/contact">Contact</FooterLink>
                    <FooterLink to="/">Тех. Поддержка</FooterLink>
                    <FooterLink to="/">Выбрать маршрут</FooterLink>
                </FooterLinkList>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkList>
                    <FooterLinkTitle>Видео</FooterLinkTitle>
                    <FooterLink to="/">Видеоотзывы</FooterLink>
                    <FooterLink to="/">Консульство</FooterLink>
                    <FooterLink to="/">Агентство</FooterLink>
                </FooterLinkList>
                <FooterLinkList>
                    <FooterLinkTitle>Мы в социальных сетях</FooterLinkTitle>
                    <FooterLink to="/">Instagram</FooterLink>
                    <FooterLink to="/">Facebook</FooterLink>
                    <FooterLink to="/">Youtube</FooterLink>
                </FooterLinkList>
            </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer
