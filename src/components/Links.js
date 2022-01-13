import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from '../features/axios'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";

function Links() {
    const [Articles, setArticles] = useState();
    const [loading, setLoading] = useState(false);
    const params = useParams();

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(`/${params.sportname}/articles`);

            setArticles(req.data);
            setLoading(true);
        }
        

        fetchData();
    },[]);

    return (
        <Container>
            {loading ? <div>
                <Card to={{
                    pathname : `/${params.sportname}/articles/${Articles[0]['link']}`,
                    state : {
                        imgsrc: Articles[0]['imgsrc']
                    }
                    }}>
                    <img src={`${Articles[0]['imgsrc']}`}/>
                    <TextContainer>
                        <h2>
                            {`${Articles[0]['innertext']}`}
                        </h2>
                        <h3 className="hsub">
                            {`${Articles[0]['subtext']}`}
                        </h3>
                    </TextContainer>
                </Card>
                <CardContainer className="cards">
                    {Articles.map(article =>{
                        if(article!=Articles[0]){
                            return(
                                <Card to={{
                                    pathname:`/${params.sportname}/articles/${article['link']}`,
                                    state: {
                                        imgsrc: article['imgsrc']
                                    }
                                    }}>
                                    <img src={`${article['imgsrc']}`}/>
                                    <TextContainer>
                                        <h3>
                                            {`${article['innertext']}`}
                                        </h3>
                                        <p>
                                        {`${article['subtext']}`}
                                        </p>
                                    </TextContainer>
                                </Card>
                            )
                        }
                    })}
                </CardContainer> 
            </div>
                : 
                <div>
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
                </div>
                }
        </Container>
    )
}

export default Links

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    color: white;
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
`

const Card = styled(Link)`
    text-decoration: none;
    color: white;
    border: 1px solid;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 50%;
        height: auto;
        margin-right: 5%;
        border-radius: 30px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
    }
    cursor: pointer;
    @media (max-width: 1150px){
        flex-direction: column;
    }
`

const CardContainer=styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
    margin-bottom: 20vh;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    margin-top: 15px;
    @media (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 450px){
        grid-template-columns: repeat(1, 1fr);
    }
`

const TextContainer=styled.div`
    .hsub{
        color: #A9A9A9;
    }
    p{
        color: #A9A9A9;
    }
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