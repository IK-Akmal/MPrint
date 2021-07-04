import React from 'react'
import styled from 'styled-components';


function Button(props) {
    return (
        <ButtonEl>
           {props.children}
        </ButtonEl>
    )
}

export default Button


const ButtonEl = styled.button`

    padding: 10px 30px;
    text-align: center;
    box-sizing: border-box;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 15px;
    box-shadow: 0 0 0 transparent, 0px 30px 50px rgba(0, 0, 0, 0.25);
    background: linear-gradient(to bottom, #ffb70b 0%, #ff4160 100%) transparent;
    border-top: 0px solid #a63a4c;
    border-right: 0px solid #a63a4c;
    border-bottom: 3px solid #a63a4c;
    border-left: 0px solid #a63a4c;
    
    border-radius: 250px;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        background: #ff4662;
    }
    &:active{
        transform: scale(.995);
    }
`;