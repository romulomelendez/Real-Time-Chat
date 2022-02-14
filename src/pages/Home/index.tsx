import React, { useState } from 'react'

import { Select } from '../../components/Select'
import { UserName } from '../../components/UserName'
import { Button } from '../../components/Button'

import { Container } from './style'

export const Home: React.FC = () => {

    

    const handleUserName = () => {

        // if ( userName.trim() )
        //     console.log('username existe!')
        // else
        //     console.log('Username não existe!')

    }

    return (

        <Container>

            <form action="/chat">

                <Select />
                <UserName />
                <Button name="GO" onClick={ handleUserName } />

            </form>
        
        </Container>

    )

}