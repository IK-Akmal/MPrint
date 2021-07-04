import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../img/logo-main.png';
import Button from '../components/Button/Button';

function Layout(props) {
    return (
        <>
            <Header>
                <NavLinkEl to='/'>
                    <img src={Logo} alt="logo" />
                </NavLinkEl>
                <ul>
                    <li><NavLinkEl exact to='/'>Главная</NavLinkEl></li>
                    <li><NavLinkEl to='/about-print'>О типографии</NavLinkEl></li>
                    <li><NavLinkEl to='/price-for-printing'>Цена на печать</NavLinkEl></li>
                    <li><NavLinkEl to='/our-equipment'>Наше оборудование</NavLinkEl></li>
                    <li><NavLinkEl to='/contacts'>Контакты</NavLinkEl></li>
                </ul>
            </Header>
            <Main>
                {props.children}
            </Main>
            <Footer>
                <FooterWrapper>
                    <div>
                        <h3>Copyright © 2019 - 2021 <br />M Print</h3>
                        <p>Перепечатка и использование материалов с данного сайта, разрешена только по согласию с владельцем</p>
                    </div>
                    <div>
                        <h3>Появились вопросы? Напишите нам!</h3>
                        <p>Оставьте заявку и наши менеджеры свяжутся с Вами в течении 15 минут.</p>
                        <form action="">

                            <Input type="text" name="name" placeholder="* Ваше имя:" required />
                            <Input type="email" name="email" placeholder="* Эл. почта:" required/>

                            <Button>
                                <>Отправить</>
                            </Button>
                        </form>
                    </div>
                    <div>
                        <h3>Контакты</h3>
                        <p>
                            <a href="tel:+998999999999">+998 (99) 999-99-99</a>
                            <br />
                            <a href="tel:+998999999999">+998 (99) 999-99-99</a>
                        </p>
                    </div>
                </FooterWrapper>
            </Footer>
        </>
    )
}

export default Layout



const NavLinkEl = styled(NavLink)`
    text-decoration: none;
    color: white;
    &.active{
        color:#DB4662;
        font-weight:700;
    }
    &:hover{
        color:#DB4662;
    }
`;

const Header = styled.header`
    
    display: flex;
    align-items: center;
    gap: 80px;

    max-width: 1400px;
    margin: 0 auto;
    padding: 10px 45px;

    background-color: transparent;


    position: absolute; 
    top: 0; 
    left: 0;
    right: 0;
    
    ul{
        display: flex;
        list-style: none;
        justify-content: space-around;
        gap: 20px;
    }
`;

const Main = styled.main`

`;

const Footer = styled.footer`
    
    margin-top: 50px;  
    background-color:#222638;

   
`;

const FooterWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px 30px 20px;
    display: grid;
    grid-template-columns: 1fr 1.5fr 1fr;
    div{
        padding: 50px;
        
        h3{
            font-size: 16px;
            font-weight: 500;
            color: white;
            margin-bottom: 30px;    
        }
        p{
            color: rgba(255, 255, 255, 0.5);
            line-height: 1.5;
            margin-bottom: 30px;
         }
        a{
            text-decoration: none;
            color:white;
        }
    }

    input:nth-child(2){
        margin-bottom: 30px;

    }
    div:nth-child(1){
        border-bottom: 1px solid #393C4C;
    }
    div:nth-child(2){
        border-bottom: 1px solid #393C4C;
        border-left: 1px solid #393C4C;
        border-right: 1px solid #393C4C;
    }
    div:nth-child(3){
        border-bottom: 1px solid #393C4C;
    }
    
`;

const Input = styled.input`
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    min-width: 100px;
    min-height: 50px;
    outline: none;
    color: rgba(255, 255, 255, 0.5);
    line-height: 1.2;
    letter-spacing: 0;
    font-size: 15px;
    height: 50px;
    margin-bottom: 10px;
    padding: 2px 20px;

`;