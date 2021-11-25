import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Link to="/">
                <img src = "/images/tiger-logo.png"/>
            </Link>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
    img{
        height: 65px;
        width: auto;
    }
`
