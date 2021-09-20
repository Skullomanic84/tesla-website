import React from 'react';
import styled from 'styled-components';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <Wrap bgImage={backgroundImg}>

            <TextWrap>
                <h1>{title}</h1>
                <p>{description}</p>
            </TextWrap>

            <Button>
                <ButtonGroup>
                <LeftBtn>
                    {leftBtnText}
                </LeftBtn>
                {rightBtnText && 
                    <RightBtn>
                    {rightBtnText}
                    </RightBtn>
                }
            </ButtonGroup>

            <DownArrow src='/images/down-arrow.svg' />
            </Button> 
            
        </Wrap>
    )
}

export default Section

const Wrap = styled.div `
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between; //vertical alignment
    align-items: center; //horizontal alignment
    background-image: ${props => `url("/images/${props.bgImage}")`};
`
const TextWrap = styled.div `
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div `
    display: flex;
    margin-bottom: 30px;

    @media (max-width: 768px){
        flex-direction: column;
    }

`

const LeftBtn = styled.div `
    background-color: rgba(23, 26, 32, .8);
    height: 40px;
    width: 256px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    opacity: .85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;

`

const RightBtn = styled(LeftBtn) `
    background: #fff;
    color: #000;
    opacity: .65;
`

const DownArrow = styled.img `
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Button = styled.div ``