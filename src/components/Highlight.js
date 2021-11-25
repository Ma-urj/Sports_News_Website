import React from 'react'
import styled from 'styled-components'

function Highlight() {
    return (
        <Container>
            <HLImg>
                <img src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1116%2Fr938111_1296x729_16%2D9.jpg&w=920&h=518&scale=crop&cquality=80&location=origin&format=jpg" />
            </HLImg>
            <Art>
            <p>The <a href="/nba/team/_/name/lal/los-angeles-lakers">Los Angeles Lakers</a> got blitzed by the <a href="/nba/team/_/name/chi/chicago-bulls">Chicago Bulls</a> on Monday night, but the team continues to see promising signs from talented young wing <a href="https://www.espn.com/nba/player/_/id/4396991/talen-horton-tucker">Talen Horton-Tucker</a>. The third-year shooting guard scored 28 points on 19 shots and posted the best net rating of the team's starters in the loss to the Bulls.</p>
            <p>With the Lakers in need of Horton-Tucker's scoring, defense, and playmaking, he played a team-high 37 minutes on Monday. A gifted playmaker who posted an awesome assist percentage of 20.8% last season -- which means he was assisting on a fifth of his teammates' field goals while on the court -- Horton-Tucker is likely to set career highs in minutes and statistics across the board this season.</p>
            <p>Rostered in only 7.2% of ESPN leagues and yet due for a busy starting role for the Lakers, Horton-Tucker has been a key positive in an otherwise slow start to the season for Los Angeles.</p>
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