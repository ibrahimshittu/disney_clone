import React from 'react'
import styled from 'styled-components'

function RecButton({text, imgSource, backgroundColor, textColor}) {
    return (
        <RButton bgColor= {backgroundColor} Color={textColor}>
            <img src={imgSource} />
            <span>{text}</span>
        </RButton>
    )
}

export default RecButton

const RButton = styled.button`
    border-radius: 4px;
    border: 1px solid rgb(249, 249, 249);
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background: ${props => `${props.bgColor};`}
    color: ${props => `${props.Color};`};
    padding: 0 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        background: rgb(198, 198, 198);
    }
`
