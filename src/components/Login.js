import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignIn>GET ALL THERE</SignIn>
                <Descr>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    Ut enim ad minim veniam
                </Descr>
                <CTALogoTwo src="/images/cta-logo-two.png" />
                 
            </CTA>
            
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        background-image: url("/images/login-background.jpg");
        content: "";
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        opacity: 0.6;
        z-index: -1;
    }

`

const CTA = styled.div`
    width: 90%;
    max-width: 650px;
    margin-top: 60px;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    
    
    
`

const CTALogoOne = styled.img`
    
`


const SignIn = styled.a`
    width: 100%;
    background-color: #0063e5;
    padding: 17px 0;
    color: #f9f9f9;
    font-weight: bold;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.4px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background-color: #0483ee;
    }
    
`
const Descr = styled.div`
    font-size: 11px;
    text-align: center; 
    letter-spacing: 1.5px;
    line-height: 1.5;  
    margin-bottom: 12px; 
`
const CTALogoTwo = styled.img`
    
`