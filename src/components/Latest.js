import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from '../features/axios'

function Latest() {
    const [heading, setHeading] = useState();
    const [author, setAuthor] = useState();
    const [imgsrc, setImgSrc] = useState();
    const [txt, setText] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/latest');

            setHeading(req.data.heading);
            setImgSrc(req.data.imgsrc);
            setText(req.data['text']);
            setAuthor(req.data.author);
            setLoading(true);
        }

        fetchData();
    }, []);


    return (
        <div>
            {loading ? 
            <Container>
                <HLImg>
                    <img src={`${imgsrc}`} />
                </HLImg>
                <div>
                    <h1>{heading}</h1>
                    <h3>{author}</h3>
                    <Art>
                    <p>{txt}</p>
                    </Art>
                </div>
            </Container>: 
            <Container>
                <LoadingContainer>
                    <LoadingImage>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    </LoadingImage>
                </LoadingContainer>
            </Container>
            }
        </div>
    )
}

export default Latest

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    &:before{
        background: url("/images/home-background.png") center center / cover 
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
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
        border-radius: 30px;
        
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
        @media (min-width: 1000px) {
            width: 900px
        }
    }
`

const Art = styled.div`
    margin-top 20px;
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

const LoadingContainer = styled.div`

`

const LoadingImage = styled.div`
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .wave {
        width: 5px;
        height: 100px;
        background: linear-gradient(45deg, cyan, #fff);
        margin: 10px;
        animation: wave 1s linear infinite;
        border-radius: 20px;
      }
      .wave:nth-child(2) {
        animation-delay: 0.1s;
      }
      .wave:nth-child(3) {
        animation-delay: 0.2s;
      }
      .wave:nth-child(4) {
        animation-delay: 0.3s;
      }
      .wave:nth-child(5) {
        animation-delay: 0.4s;
      }
      .wave:nth-child(6) {
        animation-delay: 0.5s;
      }
      .wave:nth-child(7) {
        animation-delay: 0.6s;
      }
      .wave:nth-child(8) {
        animation-delay: 0.7s;
      }
      .wave:nth-child(9) {
        animation-delay: 0.8s;
      }
      .wave:nth-child(10) {
        animation-delay: 0.9s;
      }
      
      @keyframes wave {
        0% {
          transform: scale(0);
        }
        50% {
          transform: scale(1);
        }
        100% {
          transform: scale(0);
        }
      }
`