import React from 'react'
import styled from 'styled-components'
import Container from './../Container/Container'
import Navbar from '../Navbar/Navbar'

const Bg = styled.div`
    background: #F5F6FA;
`

const Cabinet = () => {
    return (
        <Bg>
            <Navbar />
        </Bg>
    )
}

export default Cabinet
