import React from 'react'
import styled from 'styled-components'
import Home from './Home'

function Section() {
    return (
        <Wrap>

            <TextWrap>
                <h1>Model S</h1>
                <p>Order online for touchless delivery</p>
            </TextWrap>

            <ButtonGroup>
                <LeftBtn>
                    Custom Order
                </LeftBtn>
                <RightBtn>
                    Existing Inventory
                </RightBtn>
            
            </ButtonGroup>
            
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
    background-image: url('/images/model-s.jpg');
`
const TextWrap = styled.div `
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div ``

const LeftBtn = styled.div ``

const RightBtn = styled(LeftBtn) ``