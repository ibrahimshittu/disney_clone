import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import db from '../firebase'
import { onSnapshot, collection} from "firebase/firestore";





function Home() {


    useEffect(() => {
        onSnapshot(collection(db, "colors"), (querySnapshot) => {
            console.log("Data", querySnapshot.docs.map((doc) => doc.data()));
    });
    }, [])

    return (
        <Container>
            <ImgSlider />
            <Viewers/>
            <Movies/>
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding:  0 calc(3.5vw + 5px);
    position: relative; 
    overflow-x: hidden;

    &:before {
        background: url("/images/home-background.png");
        background: url("/images/home-background.png") center center / cover no-repeat fixed ;
        // background-position: center center no-repeat fixed;
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right:0;
        bottom: 0;
        z-index:-1;
    }

`