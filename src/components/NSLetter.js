import React from 'react'
import styled from 'styled-components'

function NSLetter() {
    return (
        <Container>
            This is the news letter.
        </Container>
    )
}

export default NSLetter

const Container = styled.div`
    color: white;
    font-size: 20px;
    border: 4px solid;
    padding: 50px;
`

