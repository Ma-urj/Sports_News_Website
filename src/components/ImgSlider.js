import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true
    }
    return (
        <Carousel {...settings}>
            <Wrap to="/basketball">
                <img src = '/images/Basketball-wall.png' />
                <h1>Basketball</h1>
            </Wrap>
            <Wrap to="/formula1">
                <img src = '/images/formula1.jpg' />
                <h1>Formula 1</h1>
            </Wrap>
            <Wrap to="/cricket">
                <img src = 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c5de6b27464719.563711d06a106.jpg' />
                <h1>Cricket</h1>
            </Wrap>
            <Wrap to="/football">
                <img src = '/images/football.jpg' />
                <h1>Football</h1>
            </Wrap>
            <Wrap to="/rugby-union">
                <img src = '/images/rugby.jpg' />
                <h1>Rugby</h1>
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 20px;
    ul li button{
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }
    li.slick-active button:before{
        color: white;
    }
    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }
    border-bottom: 4px solid;
    color: white;
`

const Wrap = styled(Link)`
    cursor: pointer;
    display: flex;
    position: relative;
    img{
        margin: 0 5px;
        border: 4px solid transparent;
        border-radius: 4px;
        width: auto;
        height: 100px;
        @media (width: 280px) {
            height: 50px;
        }
        @media (min-width: 320px) {
            height: 80px;
        }
        @media (min-width: 540px) {
            height: 100px;
        }
        @media (min-width: 768px) {
            height: 150px;
        }
        @media (min-width: 1024px) {
            height: 20vh;
        }
        @media (min-width: 1100px) {
            height: 35vh;
        }

        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgba(249,249,249,0.8);

        }
        z-index: 0;
        top: 0;
    }
    h1{
        color: #A9A9A9;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
        padding-left: 10%;
    }
    
    &:hover{
        transform: scale(1.05);
        transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        img{
            animation: fadeOut s;
            -webkit-animation: fadeOut 5s;
            -moz-animation: fadeOut 5s;
            -o-animation: fadeOut 5s;
            -ms-animation: fadeOut 5s;
        }
        @keyframes fadeOut {
            0% {opacity:0.5;}
            100% {opacity:0.5;}
          }
          
        @-moz-keyframes fadeOut {
        0% {opacity:0.5;}
        100% {opacity:0.5;}
        }
        
        @-webkit-keyframes fadeOut {
        0% {opacity:0.5;}
        100% {opacity:0.5;}
        }
        
        @-o-keyframes fadeOut {
        0% {opacity:0.5;}
        100% {opacity:0.5;}
        }
        
        @-ms-keyframes fadeOut {
        0% {opacity:0.5;}
        100% {opacity:0.5;}
        }
        h1{
            opacity: 1;
        }
    }
`
