import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Contacts() {
    return (
        <Container>
            <AboutPrintWrapper>
                <p><Link to='/'>Главная</Link> \ Контакты</p>
                <h2>Контакты</h2>
                <p>
                    <a href="tel:+998999999999">+998 (99) 999-99-99</a>
                    <br />
                    <a href="tel:+998999999999">+998 (99) 999-99-99</a>
                </p>
            </AboutPrintWrapper>
        </Container>
    )
}

export default Contacts


const Container = styled.section`
    max-width: 1400px;
    margin: 0 auto;
`;

const AboutPrintWrapper = styled.div`
    background-color: #F8F7F3;
    border-radius: 5px; 
    margin-top: 230px;
    padding:  50px 100px;  

    p{
        margin: 16px 0;
        color: #555;
        line-height: 1.8;
        font-size: 16px;
    }

    p:nth-child(1){
        color: #999;
        font-size: 13px;
        margin-top: 0;
        margin-bottom: 30px;

    }
    

    h2{
        font-size: 30px;
        margin-bottom: 20px;
    }
`;