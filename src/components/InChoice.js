import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import  { Redirect } from 'react-router-dom'
import { useParams } from "react-router-dom";


function InChoice() {
    let today = new Date().toISOString().slice(0, 10)
    const params = useParams();
    if(params.sportname=='formula1' || params.sportname=='cricket'){
        return <Redirect to={{pathname:`/${params.sportname}/articles`}}  />
    }
    return (
        <Container>
            <SCont>{params.sportname[0].toUpperCase()}{params.sportname.slice(1)}</SCont>
            <CardContainer>
                <Card to={{pathname:`/${params.sportname}/articles`}}>
                    <h1>Articles</h1>
                    <img src="/images/article.jpg"/>
                </Card>
                <FCard to={{pathname:`/${params.sportname}/fixtures/${today}`}}>
                    <img src="/images/fixture.png"/>
                </FCard>
            </CardContainer>
        </Container>
    )
}

export default InChoice

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
const SCont = styled.h1``

const Card = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    img{
        width: 70%;
        height: auto;
        margin-right: 5%;
        border-radius: 30px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
        z-index: 0;
        &:hover{
            width: 80%;
        }
    }
    h1{
        position: absolute;
        z-index: 2;
        color: black;
    }
    cursor: pointer;
    @media (max-width: 1150px){
        flex-direction: column;
    }

`
const FCard = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    img{
        width: 60%;
        height: auto;
        margin-right: 5%;
        border-radius: 30px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
        z-index: 0;
        &:hover{
            width: 65%;
        }
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
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 450px){
        grid-template-columns: repeat(1, 1fr);
    }
`
