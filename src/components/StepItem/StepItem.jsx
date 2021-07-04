import React from 'react'
import styled from 'styled-components'


function StepItem(props) {
    return (
        <StepItemWrapper>
            <ImgWrapper>
                <img src={props.img} alt="img" />
            </ImgWrapper>
            <StepText>
                <p>{props.title}</p>
                <p>{props.text}</p>
            </StepText>
        </StepItemWrapper>
    )
}

export default StepItem

const StepItemWrapper = styled.div`
    display: flex;
    flex: 1 1 0;
    gap: 10px;
    overflow-wrap: break-word;
`;

const ImgWrapper = styled.div`
    height: 80px;
    width: 80px; 
    min-width: 80px;
    border-radius: 100%;
    border: 3px solid  #303549;
    display: flex; 
    justify-content: center;
    align-items: center;
`;

const StepText = styled.div`

    p:nth-child(1){
        color: #FF4662;
        font-size:16px;
        font-weight: bold;
        margin-bottom: 5px;
    }
    p:nth-last-child(1){
        font-weight: 600;
        font-size: 16px;
        color: rgba(255, 255, 255, 0.7);
        line-height: 1.3;
    }
`;
