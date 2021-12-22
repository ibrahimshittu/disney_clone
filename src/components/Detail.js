import React from 'react'
import styled from 'styled-components'
import RecButton from './RecButton'

function Detail() {
    return (
        <Container>
            <Background>
                <img src='/images/login-background.jpg'/>
            </Background>
            <ImageTitle>
                <img src='/images/logo.svg'/>
            </ImageTitle>
            <Controls>
                <RecButton text="PLAY" imgSource="/images/play-icon-black.png" backgroundColor="rgb(249, 249, 249)" />
                <RecButton text="TRAILER" imgSource="/images/play-icon-white.png" backgroundColor="rgba(0, 0, 0, 0.3)" textColor="white"/>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton> 
            </Controls>
            <subTitle style={{"font-size": "15px", "min-height": "20px"}}>
                <p>attribute attribute</p>
            </subTitle>
            <Description>
                lorem ipsum The href attribute is required for an anchor to be keyboard accessible. 
                    Provide a valid, navigable address as the href value. 
                    If you cannot provide an href, but still need the element to resemble a link, 
                    use a button and change it with appropriate styles. Learn more
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding:  0 calc(3.5vw + 5px);
    position: relative;

`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
     }

`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vh;
    min-width: 200px;

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
        opacity: 0.8;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`
const AddButton = styled.button`
    cursor: pointer;
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background: rgb(0, 0, 0.8);
    
    span {
        font-size: 30px;
        color: white;
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
    cursor: pointer;
`

const Description = styled.div`
    color: rgb(249, 249, 249);
    margin-top: 26px;
    min-height: 20px;
    font-size: 15px;
    line-height: 1.4;
`