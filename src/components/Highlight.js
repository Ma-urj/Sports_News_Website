import React from 'react'
import styled from 'styled-components'

function Highlight() {
    return (
        <Container>
            <HLImg>
                <img src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1116%2Fr938111_1296x729_16%2D9.jpg&w=920&h=518&scale=crop&cquality=80&location=origin&format=jpg" />
            </HLImg>
            <Art>
            <p> The objective of this project is to create API to web scrape a website. BY  web scraping, we get the information of latest news (Not Live). We also  get the list of articles (Not Live) to view separately for Football,  Basketball, Cricket and Formula1. The objective is to create a website  and show the articles separately on the website created. The website is  created using Visual Studio Code, HTML5, CSS, JavaScript, React, Redux,  React-slick, Puppeteer. We use React Router DOM to implement  dynamic routing in the web application. Styled-components are used to  modify the web application. Firebase is used to develop the web  application. Express.js is used to manage everything, from routes, to  handling requests and views.  </p>
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