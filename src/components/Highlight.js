import React from 'react'
import styled from 'styled-components'

function Highlight() {
    return (
        <Container>
            <HLImg>
                <img src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1116%2Fr938111_1296x729_16%2D9.jpg&w=920&h=518&scale=crop&cquality=80&location=origin&format=jpg" />
            </HLImg>
            <Art>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Art>
        </Container>
    )
}

export default Highlight

const Container = styled.div`
    padding-top: 30px;
    display: flex;
    color: white;
    overflow: hidden;
    flex-direction: column;
    @media (min-width: 1000px) {
        flex-direction: row;
    }
`

const HLImg = styled.div`
    flex-basis: 30%;
    img{
        height: auto;
        width: 100%;
        border: 0.5px solid transparent;
        border-radius: 15px;
        
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
`

const Art = styled.div`
    margin-top: 15px;
    border: 3px solid;
    flex-basis:70%;
    p{
        a{
            color: #A9A9A9;
            text-decoration: none;
        }
    }
    @media (min-width: 1000px) {
        margin-top 0px;
    }
`