import React, {useState}  from "react";
import styled from "styled-components";
import {Link} from "gatsby";
import {FaBars} from "react-icons/fa";
import {menuData} from "../data/menuData";
import {Button} from "./UI/Button";
import DropDown from "./DropDown";

const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1300px) / 2);
    z-index: 100;
    position: relative;
`;

const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`;

const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 2.5rem;
        background: #68be52;
        padding: 7px;
        border-radius: 5px;
        cursor: pointer;
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return <>
        <Nav>
            <NavLink to="/">Trip Travel</NavLink>
            <Bars onClick={toggle} />
            <NavMenu>
                {menuData &&
                    menuData.map(menu => (
                        <NavLink to={menu.path} key={menu.id}>
                            {menu.title}
                        </NavLink>
                    ))}
            </NavMenu>
            <NavBtn>
                <Button primary="true" round="true" to="/">
                    Забронировать
                </Button>
            </NavBtn>
        </Nav>
        <DropDown toggle={toggle} isOpen={isOpen} />
    </>
};

export default Header;
