import React from 'react'
import styled from 'styled-components'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import zoomImg from '../../img/zoom.svg';


import { Gallery, Item } from 'react-photoswipe-gallery';





export function ItemGallery(props) {


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
                    <img
                        src={props.img}
                        alt="img"
                        ref={ref}
                        onClick={open}
                    />
                    <div onClick={open} >
                        <p>{props.title}</p>
                    </div>
                </ImgWrapper>
            )}
        </Item>
    )
}


export function GalleryEl(props) {


    return (
        <Gallery>
            <GalleryWrapper isEl={props.isEl}>
                {props.children}
            </GalleryWrapper>
        </Gallery>
    )
}



const GalleryWrapper = styled.div`
    
    display: grid; 
    grid-template-columns: ${props => props.isEl ? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr"};
    justify-content: start;
    gap: 20px;
`;

const ImgWrapper = styled.div`
    position: relative;
    div{
        position: absolute; 
        top: 0; 
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 10;
        color: transparent;
        
 
        p{
            position: absolute;
            bottom: 30px;
            left: 30px;
        }
        &:hover{
            background:  url(${zoomImg}) left 30px top 30px /17px no-repeat rgba(40, 45, 66, 0.9);
            color: #fff;
        }
    }

    img{
        object-fit: cover;
        height: 200px;
        max-height: 100%;
        width: 100%;
    }
`;