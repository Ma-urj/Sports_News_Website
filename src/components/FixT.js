import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from '../features/axios'
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import Fixtures from './Fixtures';

function FixT() {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const [Fixtures, setFixtures] = useState();
    const [FKeys, setFKeys] = useState();
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(`/${params.sportname}/fixtures/${params.matchdate}`);
            setFixtures(req.data);
            setLoading(true);
        }

        fetchData();
    }, []);

    if(params.sportname=='basketball'){
      return(
        <div>
          {loading?
          <MainCont>
            <div>
                  {Object.keys(Fixtures).map(fixture=>{
                    return(
                      <div>
                        <MatchT>
                          {fixture}
                        </MatchT>
                        <MatchB>
                          {Fixtures[fixture].map(element => {
                            if(element.length==15 && element[0]=='LIVE'){
                              return(
                                <Bord>
                                  <MatchA>
                                  <BMatchS><div>{element[5].replaceAll("-"," ")}</div> <div>{element[6].replaceAll("-"," ")}</div></BMatchS><BCenti><div>{element[2].replaceAll("-"," ")}</div><SemiCont><MSOT>{element[7]}</MSOT><MSOT>{element[13]}</MSOT></SemiCont><div>{element[4].replaceAll("-"," ")}</div><SemiCont><MSOT>{element[8]}</MSOT><MSOT>{element[13]}</MSOT></SemiCont></BCenti><BMatchS><div>{element[10].replaceAll("-"," ")}</div> <div>{element[11].replaceAll("-"," ")}</div></BMatchS>
                                  </MatchA>
                                </Bord>
                              )
                            }
                            if(element.length==15){
                              return(
                                <Bord>
                                  <MatchA>
                                    <BMatchS><div>{element[2].replaceAll("-"," ")}</div> <div>{element[3].replaceAll("-"," ")}</div></BMatchS><Centi><MSOT>{element[8]}</MSOT></Centi><BMatchS><div>{element[5].replaceAll("-"," ")}</div> <div>{element[6].replaceAll("-"," ")}</div></BMatchS>
                                  </MatchA>
                                </Bord>
                            )}
                            if(element.length==13){
                              return(
                                <Bord>
                                  <MatchA>
                                  <BMatchS><div>{element[3].replaceAll("-"," ")}</div> <div>{element[4].replaceAll("-"," ")}</div></BMatchS><BCenti><div>{element[0].replaceAll("-"," ")}</div><SemiCont><MSOT>{element[5]}</MSOT><MSOT>{element[10]}</MSOT></SemiCont><div>{element[2].replaceAll("-"," ")}</div><SemiCont><MSOT>{element[6]}</MSOT><MSOT>{element[11]}</MSOT></SemiCont></BCenti><BMatchS><div>{element[8].replaceAll("-"," ")}</div> <div>{element[9].replaceAll("-"," ")}</div></BMatchS>
                                  </MatchA>
                                </Bord>
                              )
                            }
                            })}
                          </MatchB>
                      </div>
                    )
                  })}
                </div>
          </MainCont>
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
        </div>
      )
    }
    else{
      return (
          <div>
              {loading ? <MainCont>
                <div>
                  {Object.keys(Fixtures).map(fixture=>{
                    return(
                      <div>
                        <MatchT>
                          {fixture}
                        </MatchT>
                        <MatchB>
                          {Fixtures[fixture].map(element => {
                            if(element.length==3){
                              return(
                                <Bord>
                                  <MatchA>
                                    <MatchS>{element[0].replaceAll("-"," ")}</MatchS><Centi><MSOT>{element[1]}</MSOT></Centi><MatchS>{element[2].replaceAll("-"," ")}</MatchS>
                                  </MatchA>
                                </Bord>
                            )}
                            if(element.length==5){
                              return(
                                <Bord>
                                  <MatchA>
                                    <MatchS>{element[0].replaceAll("-"," ")}</MatchS><Centi><MSOT>{element[1]}</MSOT><MSOT>{element[3]}</MSOT></Centi><MatchS>{element[2].replaceAll("-"," ")}</MatchS>
                                  </MatchA>
                                  <Deets>{element[4].replaceAll("-"," ")}</Deets>
                                </Bord>
                              )
                            }
                            })}
                          </MatchB>
                      </div>
                    )
                  })}
                </div>
              </MainCont>
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
          </div>
      )
    }
}

export default FixT

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
const SemiCont = styled.div`
      display: flex;
      margin: 10px 0;
      justify-content: space-around;
`

const Bord = styled.div`
      border: 1px solid white;
      margin: 10px 0;
      padding: 50px 0;
`

const Deets = styled.div`
      padding-bottom: 5px;
`

const MSOT = styled.div`
      margin: 0 5px;
      color: black;
      background: yellow;
      padding 10px;
`
const Centi = styled.div`
      position: absolute;
      display: flex;
`
const BCenti = styled.div`
      position: absolute;
`

const MainCont = styled.div`
      margin-top: 20px;
`

const MatchS = styled.div`
      padding: 5px;
      margin: 0 100px;
`
const BMatchS = styled.div`
      padding: 5px;
      margin: 0 150px;
`

const MatchA = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
`

const MatchT = styled.div`
      background: white;
      color: black;
`
const MatchB = styled.div`
      padding: 50px;
      align-items: center;
      justify-content: center;
`