import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function AboutPrint() {
    return (
        <Container>
            <AboutPrintWrapper>
                <p><Link to='/'>Главная</Link> \ О типографии</p>
                <h2>О типографии</h2>
                <p>Типография МPrint уже с 1995 года предоставляет большой спектр услуг в области полиграфии.</p>
                <p>Компания специализируется на изготовлении полиграфической продукции с применением различных видов печати и после печатной обработки, целью которого является качественное и своевременное обеспечение заказчика готовой полиграфической продукцией любой сложности.</p>
                <p>МPrint производит следующие виды полиграфической продукции: Каталоги, журналы, плакаты, постеры, флаеры, афиши, открытки, буклеты, этикетки, упаковочные коробки, папки, фирменные бланки и т.д.</p>
                <p>Мы предлагаем следующие услуги:</p>
                <p>
                    Офсетная печать, тиснение, высечка, УФ (выборочное и сплошное) лакирование, ламинирование.
                </p>
                <p>Наши специалисты помогут вам осуществить любую идею для вашего бизнеса в короткий срок и по низкой цене.</p>
                <p>Мы с удовольствием сделаем пробный расчет стоимости любой вашей печатной продукции.</p>
                <p>Мы гарантируем высокий уровень сервиса на заказах любой сложности.</p>
            </AboutPrintWrapper>
        </Container>
    )
}

export default AboutPrint


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