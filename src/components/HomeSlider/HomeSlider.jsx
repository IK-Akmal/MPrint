
import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

import Button from '../Button/Button'

import img1 from '../../img/gallery/maracandy_katalog.jpg'
import img2 from '../../img/gallery/ipak_yoli_bank_flayer.jpg'

function HomeSlider() {

    const settings = {
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };


    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    position: "absolute",
                    top: "-30px",
                    left: "90%",

                }}
                onClick={onClick}
            />
        );
    }
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    position: "absolute",
                    top: "-30px",
                    right: "5%",

                }}

                onClick={onClick}
            />
        );
    }

    return (
        <Slider {...settings} style={{ width: "avto" }}>
            <div >
                <ItemSlider>
                    <img src={img1} alt="img" />
                    <div>
                        <h2>Супер скидка!!!</h2>
                        <p>Каталоги и журналы с 25% скидкой с итоговой суммы!</p>
                        <Button>Оформить заказ по акции</Button>
                    </div>
                </ItemSlider>
            </div>
            <div >
                <ItemSlider>
                    <img src={img2} alt="img" />
                    <div>
                        <h2>Флаера</h2>
                        <p>С наступлением осени наша компания предоставляет скидку на Флаера по 100 сум за шт!</p>
                    </div>
                </ItemSlider>
            </div>
        </Slider>
    )
}

export default HomeSlider


const ItemSlider = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr; 
  
    gap: 50px;

    img{
        height: 500px;
        max-width: 500px;
        object-fit:cover;
        border-radius: 5px;
    }

    div{
        align-self:start;
        padding: 30px;
        margin-right:5px;
        border-radius: 5px;
        background-color:#282D42;
        border: 1px dashed #535768;
        color: #fff;
        h2{
            margin-bottom: 15px;
            margin-top:0;
            font-weight: 400;
        }
        p{
            margin-bottom: 30px;
            color: rgba(255, 255, 255, 0.5);
        }
    }
`;