import React from 'react'
import styled from 'styled-components';
import Button from '../components/Button/Button';
import Service from '../components/Service/Service'
import { GalleryEl, ItemGallery } from '../components/GalleryEl/GalleryEl'
import HomeSlider from '../components/HomeSlider/HomeSlider'
import StepItem from '../components/StepItem/StepItem'
import { Link } from 'react-router-dom'


import img from '../img/s1.jpg';
import img2 from '../img/s2.jpg';
import img3 from '../img/calendar_mockup_2.jpg';

import serviceImg from '../img/01.svg';
import serviceImg2 from '../img/02.svg';
import serviceImg3 from '../img/03.svg';
import serviceImg4 from '../img/04.svg';
import serviceImg5 from '../img/05.svg';

import Galleryimg1 from '../img/gallery/andijon_kabel_bloknot.jpg';
import Galleryimg2 from '../img/gallery/ariya_teks.jpg'
import Galleryimg3 from '../img/gallery/belissimo.jpg'
import Galleryimg4 from '../img/gallery/bravissimo.jpg'
import Galleryimg5 from '../img/gallery/burger.jpg'
import Galleryimg6 from '../img/gallery/calendar_mockup.jpg'
import Galleryimg7 from '../img/gallery/devfest_sumka.jpg'
import Galleryimg8 from '../img/gallery/ipak_yoli_bank_flayer.jpg'
import Galleryimg9 from '../img/gallery/kyusid_plakat.jpg'
import Galleryimg10 from '../img/gallery/lalaku_door_hanger.jpg'
import Galleryimg11 from '../img/gallery/leaflet.jpg'
import Galleryimg12 from '../img/gallery/maracandy_katalog.jpg'



import stepImg from '../img/steps/pl01.svg';
import stepImg2 from '../img/steps/pl02.svg';
import stepImg3 from '../img/steps/pl03.svg';
import stepImg4 from '../img/steps/pl04.svg';


function Home() {
    return (
        <>
            <IntroBackground>
                <IntroWrapper>
                    <Container>
                        <h1>ПОЛНЫЙ СПЕКТР <br /> ПОЛИГРАФИЧЕСКИХ УСЛУГ <br /> В САМАРКАНДЕ</h1>
                        <p>
                            Печать под контролем. Безупречное качество. Комфортные <br /> цены.
                            Работаем на современном оборудовании. Ваши идеи <br /> – наше воплощение!
                        </p>
                        <Wrapper>
                            <Button>
                                <span>РАССЧИТАТЬ СТОИМОСТЬ</span>
                            </Button>
                            <WrapperCall>
                                <i className="fas fa-phone-alt"></i>

                                <div>
                                    <a href="tel:+998999999999">+998 (99) 999-99-99</a>
                                    <a href="tel:+998999999999">+998 (99) 999-99-99</a>
                                </div>
                            </WrapperCall>
                        </Wrapper>
                    </Container>
                </IntroWrapper>
            </IntroBackground>

            <Container>
                <Services>
                    <ServicesWrapper>
                        <h2>Предлагаем вам наши услуги:</h2>
                        <ServiesContainer>
                            <Service text="ОФСЕТНАЯ ПЕЧАТЬ" img={serviceImg} />
                            <Service text="ЛАМИНИРОВАНИЕ" img={serviceImg2} />
                            <Service text="ВЫСЕЧКА И БОГОВКА" img={serviceImg3} />
                            <Service text="ВЫБОРОЧНАЯ И СПЛОШНАЯ У.Ф. ЛАКИРОВКА" img={serviceImg4} />
                            <Service text="ТЕРМОПЕРЕПЛЁТ" img={serviceImg5} />
                        </ServiesContainer>
                    </ServicesWrapper>
                </Services>
            </Container>

            <Container>
                <Gallery>
                    <GalleryTitle>
                        <h2>Наши выполненные работы</h2>
                        <p>Ознакомьтесь с нашими работами</p>
                    </GalleryTitle>
                    <GalleryEl isEl ={true}>
                        <ItemGallery img={Galleryimg1} title="Блокнот" />
                        <ItemGallery img={Galleryimg2} title="Буклет" />
                        <ItemGallery img={Galleryimg3} title="Листовки" />
                        <ItemGallery img={Galleryimg4} title="Коробка для торта" />
                        <ItemGallery img={Galleryimg5} title="Упаковка" />
                        <ItemGallery img={Galleryimg6} title="Календарь" />
                        <ItemGallery img={Galleryimg7} title="Пакет" />
                        <ItemGallery img={Galleryimg8} title="Флаер" />
                        <ItemGallery img={Galleryimg9} title="Плакат" />
                        <ItemGallery img={Galleryimg10} title="Дорхангер" />
                        <ItemGallery img={Galleryimg11} title="Лифлет" />
                        <ItemGallery img={Galleryimg12} title="Каталог" />
                    </GalleryEl>
                </Gallery>
            </Container>

            <Promotions>
                <PromotionsBackground>
                    <Container>
                        <SliderWrapper>
                            <h2>Акции и спецпредложения</h2>
                            <HomeSlider />
                        </SliderWrapper>
                    </Container>
                </PromotionsBackground>
            </Promotions>
            <Container>
                <Steps>
                    <StepsTitle>
                        <h2>Как с нами работать</h2>
                        <p>Простые шаги на пути к взаимовыгодному сотрудничеству:</p>
                    </StepsTitle>
                    <StepsContent>
                        <StepItem img={stepImg} text="Оставляете заявку либо звоните нам" title="1" />
                        <StepItem img={stepImg2} text="Оговариваем детали" title="2" />
                        <StepItem img={stepImg3} text="Оплата любым удобным способом" title="3" />
                        <StepItem img={stepImg4} text="Получаете товар в течение 7 рабочих дней" title="4" />
                    </StepsContent>
                    <StepsFooter>
                        <Button>
                            <span>Оставить заявку</span>
                        </Button>
                    </StepsFooter>
                </Steps>
            </Container>
            <Container>
                <About>
                    <h2>МPrint</h2>
                    <AboutContent>
                        <div>
                            <p>Типография МPrint уже с 1995 года предоставляет большой спектр услуг в области полиграфии.</p>
                            <p>Компания специализируется на изготовлении полиграфической продукции с применением различных видов печати и после печатной обработки, целью которого является качественное и своевременное обеспечение заказчика готовой полиграфической продукцией любой сложности.</p>
                            <p>МPrint производит следующие виды полиграфической продукции: Каталоги, журналы, плакаты, постеры, флаеры, афиши, открытки, буклеты, этикетки, упаковочные коробки, папки, фирменные бланки и т.д.</p>
                        </div>
                        <Link to="/about-print">
                            <img src={img3} alt="img" />
                        </Link>
                    </AboutContent>
                    <Link to="/about-print">
                        <Button>
                            подробнее
                        </Button>
                    </Link>
                </About>
            </Container>

        </>
    )
}


const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;

`;

const IntroBackground = styled.section`
    background-image: url(${img});
    background-repeat: no-repeat; 
    background-blend-mode: multiply;
    background-size: cover;
`;

const IntroWrapper = styled.div`
    background-color: rgba(40, 45, 66, 0.9);
    background-image: linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 28.7%);
    height: 723px;
    padding:250px 0px 0 80px; 
    color: white;

    h1{
        font-size: 40px;
        font-weight: 900;
    }
    p{
        margin: 15px 0;
        color: rgba(255, 255, 255, 0.7);
        line-height: 1.4;
        font-weight: 500;
    }
`;

const Wrapper = styled.div`
    display: flex;
    gap: 40px;
   
`;

const WrapperCall = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    a{
        text-decoration: none;
        color: white;
        font-weight: bold;
        font-size: 17px;
    }
    div{
        display: flex; 
        flex-direction: column;
    }
`;

const Services = styled.section`

    position:relative;
    min-height: 350px;
    margin-bottom: 50px; 
`;

const ServicesWrapper = styled.div`
    position: absolute; 
    top: -50px;
    left: 0;
    right: 0;
    background-color: #F8F7F3;
    border-radius: 5px;
    padding: 50px 50px;
    h2{
        text-align: center;
    }
`;
const ServiesContainer = styled.div`
    margin-top: 30px;
    display: flex;

`;

const Gallery = styled.section`

    border-radius: 5px; 
    border: 1px solid #943952;
    position: relative;
    padding: 80px 50px 50px 50px;
`;

const GalleryTitle = styled.div`
    
    position: absolute;
    max-width: 1200px;
    width: 100%;
    top: -25px;
    background-color: #282D42;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    h2{
        color: #fff;
        font-size: 30px;
        font-weight: bold;
    }
    p {
        color: #fcee27;
        font-size: 20px;
        font-weight: 500;
    }

`

const Promotions = styled.div`
    margin-top: 100px; 
    height: 600px;
    background-image: url(${img2});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`;

const PromotionsBackground = styled.div`
    background-color: rgba(40, 45, 66, 0.9);
    position: absolute; 
    top: 0; 
    left:0;
    right: 0; 
    bottom: 0;
    h2 {
        margin: 30px 0 30px 0;
        color: #fff;
        font-size: 30px;
    }
`
const SliderWrapper = styled.div`
        max-width: 1250px;
        margin: 0 auto;

`;

const Steps = styled.div`
    margin-top: 100px;
    border-radius: 5px;
    border: 1px solid #943952;
    position: relative;
    padding: 80px 100px 50px 100px

`;
const StepsTitle = styled.div`

    position: absolute;
    top: -30px;
    left: 50%;
    transform:translateX(-50% );
    text-align: center;
    background-color: #282D42;
    max-width: 1200px;
    width: 100%;
  
    h2{
        font-size:30px;
        color: #fff;
    }

    p{
        color: #fcee27;
        font-size: 19px;
    }
`;

const StepsContent = styled.div`
     display: flex; 
    gap: 10px;
`;

const StepsFooter = styled.div`
    position: absolute;
    display: flex; 
    justify-content: center;
    bottom: -20px;
    left: 50%;
    background-color: #282D42;
    transform:translateX(-50% );
    max-width: 400px;
    width: 100%;

`;


const About = styled.section`
    background-color: #F8F7F3;
    margin-top: 100px;
    padding: 100px; 
    border-radius: 5px;
    h2{
            font-size: 30px;
            margin-bottom: 30px;
    }

`;
const AboutContent = styled.div`
    
    display: flex;
    gap: 50px;
    margin-bottom: 50px;
    p{
        margin-bottom: 16px;
        font-size: 16px;
        color: #555;
        line-height: 1.7;
    }
   
`;

export default Home
