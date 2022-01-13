import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import DateC from './Date'
import FixT from './FixT'

function FBFix() {
    return (
        <Container>
            <Dates>
                <DateC />
                <FixT />
            </Dates>
        </Container>
    )
}

export default FBFix

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

const Dates = styled.div`
    padding: 20px;
`