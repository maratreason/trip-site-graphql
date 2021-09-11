import React from "react";
import styled from "styled-components";
import {Button} from "./UI/Button";
import EmailBg from "../assets/images/people/email_man.jpg";

const EmailContainer = styled.div`
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 35%,
        rgba(0, 0, 0, 0.1) 100%
    ), url(${EmailBg}) no-repeat center;
    background-size: cover;
    height: 450px;
    width: 100%;
    padding: 5rem calc((100vw - 1300px) / 2);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const EmailContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const EmailTitle = styled.h3`
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
`;
const EmailDesc = styled.p`
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin-bottom: 2rem;
    padding: 0 1rem;
`;
const EmailForm = styled.form`
    z-index: 10;
`;
const FormWrap = styled.div`
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 1rem;
    }
`;
const FormLabel = styled.label`
`;
const FormInput = styled.input`
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
    border-radius: 50px;
    border: none;
    margin-right: 1rem;

    @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
        margin-right: 0;
        width: 100%;
    }
`;

const FormButton = styled(Button)`
    height: 48px;

    @media screen and (max-width: 768px) {
        width: 100%;
        min-width: 350px;
    }

    @media screen and (max-width: 400px) {
        width: 100%;
        min-width: 250px;
    }
`;

const Email = () => {
    return <EmailContainer>
        <EmailContent>
            <EmailTitle>Получить доступ к специальному предложению</EmailTitle>    
            <EmailDesc>Зарегистрируйтесь и получите скидку в 100 баксов на ваш первый полет!</EmailDesc>
            <EmailForm action="#">
                <FormWrap>
                    <FormLabel htmlFor="email">
                        <FormInput type="email" placeholder="Введите Email" id="email" />
                    </FormLabel>
                    <FormButton round="true" primary="true" as="button" type="submit">Зарегистрироваться</FormButton>
                </FormWrap>
            </EmailForm>    
        </EmailContent> 
    </EmailContainer>;
};

export default Email;
