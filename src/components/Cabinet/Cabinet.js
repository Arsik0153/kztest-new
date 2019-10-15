import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import TopBar from '../TopBar/TopBar'

const Bg = styled.div`
    background: #F5F6FA;
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Cabinet = () => {
    return (
        <Bg>
            <Navbar />
            <TopBar />
        </Bg>
    )
}

export default Cabinet
