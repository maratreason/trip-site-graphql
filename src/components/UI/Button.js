import styled from "styled-components";
import {Link} from "gatsby";

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? "#1e9924" : "#e0af29")};
    white-space: nowrap;
    padding: ${({big}) => (big ? "16px 40px" : "10px 32px")};
    color: #fff;
    font-size: ${({big}) => (big ? "20px" : "16px")};
    border: none;
    outline: none;
    min-width: 100px;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s !important;
    border-radius: ${({round}) => (round ? "50px" : "none")};

    &:hover {
        background: ${({primary}) => (primary ? "#e0af29" : "#1e9924")};
        transform: translateY(-2px);
    }
`;
