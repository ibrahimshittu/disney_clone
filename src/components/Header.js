import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a >
                    <img src="/images/home-icon.svg" alt="home-icon"/>
                    <span>HOME</span>
                </a>
                <a >
                    <img src="/images/search-icon.svg" alt="search-icon"/>
                    <span>SEARCH</span>
                </a>
                <a >
                    <img src="/images/watchlist-icon.svg" alt="watchlist-icon"/>
                    <span>WATCHLIST</span>
                </a>
                <a >
                    <img src="/images/original-icon.svg" alt="originals-icon"/>
                    <span>ORIGINALS</span>
                </a>
                <a >
                    <img src="/images/movie-icon.svg" alt="movie-icon"/>
                    <span>MOVIES</span>
                </a>
                <a >
                    <img src="/images/series-icon.svg" alt="series-icon"/>
                    <span>SERIES</span>
                </a>

            </NavMenu>
            <UserImg src="/images/login-background.jpg" />
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    background: #090b13;
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 36px;
`

const Logo = styled.img`
    width: 80px;
    cursor: pointer;
    
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;


        img {
            height: 20px;
        }

        span {
            font-size: 12px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                position: absolute;
                background: white;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;

            }
        }

    }
    
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;

`
