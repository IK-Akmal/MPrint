import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
function Service(props) {



    return (
        <ServiceItem>
            <LinkEl to='/our-equipment'>
                <div>
                    <img src={props.img} alt={props.text} />
                </div>
                <span>{props.text}</span>
            </LinkEl>
        </ServiceItem>
    )
}

export default Service


const ServiceItem = styled.div`
    flex: 1 1 0;
    padding: 20px;
    margin: 0 10px;
    box-shadow: inset 0px 0px 0px 1px #f1efe9, 0px 10px 20px rgb(116 108 66 / 8%);
    background: #fff;
    border-radius: 5px;
    display: flex; 
    flex-direction: column;
    border: 1px solid #fff;
    &:hover{
        border: 1px solid #FF4662;
    }
`;

const LinkEl = styled(Link)`
   
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    text-align:center;
    text-decoration: none;
    font-weight: bold;
    font-size: 14px;

    div{
        height: 80px;
        
    }
`;
