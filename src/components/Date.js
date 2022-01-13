import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'

function minusmon(mon){
    mon -=1;
    if(mon==0){
        mon=12;
    }
    return mon;
}

function plusmon(mon){
    mon+=1;
    if(mon==13){
        mon=1;
    }
    return mon;
}

function DateC() {
    const params = useParams();
    const month = {
        1: ["Jan",31],
        2: ["Feb",28],
        3: ["Mar",31],
        4: ["Apr",30],
        5: ["May",31],
        6: ["June",30],
        7: ["July",31],
        8: ["Aug",31],
        9: ["Sept",30],
        10: ["Oct",31],
        11: ["Nov",30],
        12: ["Dec",31]
    }
    let mdate = params.matchdate.split("-");
    let today = new Date().toISOString().slice(0, 10).split("-");
    //today=["2021","12","01"];
    let mday = parseInt(mdate[2]);
    let mmon = parseInt(mdate[1]);
    let currmon = parseInt(today[1]);
    let lowerd = [parseInt(today[2]-10),currmon];
    if(lowerd[0]<=0){
        lowerd[0]=month[minusmon(currmon)][1]+lowerd;
        lowerd[1]=minusmon(currmon);
    }
    let upperd = [parseInt(today[2]+10),currmon];
    if(upperd[0]>month[currmon][1]){
        upperd[0]=upperd-month[currmon][1];
        upperd[1]=plusmon(currmon);
    }
    let myear = parseInt(mdate[0]);
    let marr = [];
    for(let i=0;i<7;i++){
        let mtempmon=mmon;
        let mtempday=mday+i-3;
        if(mday-3<lowerd[0] && (mtempmon==currmon||mtempmon==minusmon(currmon))){
            mtempday=lowerd[0]+i;
        }
        let mtempyear=myear;
        if(mtempday<=0){
            mtempmon = mmon-1;
            if(mtempmon==0){
                mtempmon=12;
                mtempyear=myear-1;
            }
            mtempday=month[mtempmon][1]+mtempday;
        }
        else if(mtempday>month[mmon][1]){
            mtempday=mtempday-month[mtempmon][1];
            mtempmon=mmon+1;
            if(mtempmon==13){
                mtempmon=1;
                mtempyear=myear+1;
            }
        }
        marr[i]=[mtempday,mtempyear+"-"+("0"+mtempmon).slice(-2)+"-"+("0"+mtempday).slice(-2),mtempmon]
    }
    

    return (
        <Container>
            {marr.map(mtday=>{
                if(mtday[0]==mday){
                    return(
                        <TDateCard to={{
                            pathname: `/redir`,
                            state:{
                                pname: `/${params.sportname}/fixtures/${mtday[1]}`
                            }
                            }}>
                            <div>
                                {mtday[0]}
                            </div>
                            <div>
                                {month[mtday[2]][0]}
                            </div>
                        </TDateCard>
                    )
                }
                return(
                    <DateCard to={{
                        pathname: `/redir`,
                        state:{
                            pname: `/${params.sportname}/fixtures/${mtday[1]}`
                        }
                        }}>
                        <div>
                            {mtday[0]}
                        </div>
                        <div>
                            {month[mtday[2]][0]}
                        </div>
                    </DateCard>
                )
            })}
        </Container>
    )
}

export default DateC

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const DateCard = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 20px;
    border: 1px solid white;
    &:hover{
        background: #090B13;
    }
    @media (max-width: 500px) {
        padding: 5px;
    }
`
const TDateCard = styled(Link)`
    text-decoration: none;
    color: black;
    padding: 20px;
    border: 3px solid white;
    background: white;
    position: relative;
    &:after,&:before {
        top: 100%;
        left: 50%;
        border: solid transparent;
        content: "";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none
    }
    &:after {
        border-color: rgba(136, 183, 213, 0);
        border-top-color: white;
        border-width: 10px;
        margin-left: -10px;
    }
    &:before {
        border-color: rgba(194, 225, 245, 0);
        border-top-color: white;
        border-width: 16px;
        margin-left: -16px;
    }
    
    @media (max-width: 500px) {
        padding: 5px;
    }
`