import React from 'react'

import { Select } from '../../components/Select'
import { UserName } from '../../components/UserName'
import { Button } from '../../components/Button'

import { Container } from './style'

export const Home: React.FC = () => {

    return (

        <Container>

            <form action="/chat">

                <Select />
                <UserName />
                <Button name="GO" />

            </form>
        
        </Container>

    )

}