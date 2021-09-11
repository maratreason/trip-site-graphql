import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";
import {FaTimes} from "react-icons/fa";
import {menuData} from "../data/menuData";
import {Button} from "./UI/Button";

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #68be52;
    display: grid;
    align-items: center;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? "1" : "0")};
    top: ${({isOpen}) => (isOpen ? "0" : "-100%")};
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    font-size: 2rem;
    background: transparent;
    cursor: pointer;
    outline: none;
`;

const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`;

const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

const DropdownLink = styled(Link)`
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #faf768;
    }
`;

const DropDown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData &&
                        menuData.map(menu => (
                            <DropdownLink to={menu.path} key={menu.id}>
                                {menu.title}
                            </DropdownLink>
                        ))}
                </DropdownMenu>
                <BtnWrap>
                    <Button primary="true" round="true" big="true" to="/">
                        Забронировать
                    </Button>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    );
};

export default DropDown;
