import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GalleryEl } from '../components/GalleryEl/GalleryEl'
import { Item } from 'react-photoswipe-gallery';

import Galleryimg1 from '../img/equipment/diamont.png'
import Galleryimg2 from '../img/equipment/guawei.png'
import Galleryimg3 from '../img/equipment/khamada.png'
import Galleryimg4 from '../img/equipment/lak.png'
import Galleryimg5 from '../img/equipment/laminatsiya.png'
import Galleryimg6 from '../img/equipment/royebi_754.png'
import Galleryimg7 from '../img/equipment/royebi_780.png'
import Galleryimg8 from '../img/equipment/termopereplet.png'
import Galleryimg9 from '../img/equipment/tigel.png'



function ItemGallery(props) {


    return (
        <Item
            original={props.img}
            thumbnail={props.img}
            width="1600"
            height="1600"
            title={props.title}
        >
            {({ ref, open }) => (
                <ImgWrapper>
                    <div onClick={open}>
                        <img
                            src={props.img}
                            alt="img"
                            ref={ref}
                            onClick={open}
                        />
                    </div>
                    <div >
                        <p>{props.title}</p>
                    </div>
                </ImgWrapper>
            )}
        </Item>
    )
}


const ImgWrapper = styled.div`

    div:nth-child(1){
            display : flex; 
            justify-content: center;
            align-items: center;
            background-color: white;
            height: 182px;
            margin: 0;
            cursor: pointer;
    }

    div:nth-child(1):hover{
    border-color: rgba(17,85,204,0.4);
    box-shadow: 0 0 3px rgb(17 85 204 / 40%);
   }
    img{
            object-fit: cover;
            width:180px;
            max-height: 100%;
        }
        p{

        }
`;


function OurEquipment() {




    return (
        <Container>
            <OurEquipmentWrapper>
                <p><Link to='/'>Главная</Link> \ Наше оборудование</p>
                <h2>Машины для печати</h2>

                <GalleryEl>
                    <ItemGallery img={Galleryimg1} title="MITSUBISHI DIAMOND V3000" />
                    <ItemGallery img={Galleryimg2} title="GUAWEI" />
                    <ItemGallery img={Galleryimg3} title="HAMADA -B452" />
                    <ItemGallery img={Galleryimg4} title="Lak" />
                    <ItemGallery img={Galleryimg5} title="HOMAN HM-920YT Ламинатор" />
                    <ItemGallery img={Galleryimg6} title="RYOBI 754 XL" />
                    <ItemGallery img={Galleryimg7} title="RYOBI 780 W XL" />
                    <ItemGallery img={Galleryimg8} title="HORIZON BQ 270v" />
                    <ItemGallery img={Galleryimg9} title="Тигельный пресс Vektor TYMB 930" />
                </GalleryEl>
            </OurEquipmentWrapper>
        </Container>
    )
}

export default OurEquipment


const Container = styled.section`
    max-width: 1400px;
    margin: 0 auto;
`;

const OurEquipmentWrapper = styled.div`
    background-color: #F8F7F3;
    border-radius: 5px; 
    margin-top: 230px;
    padding:  50px 100px; 


    p:nth-child(1){
        color: #999;
        font-size: 13px;
        margin-top: 0;
        margin-bottom: 30px;
    }
    h2{
        margin-bottom: 30px;
    }
   
`;