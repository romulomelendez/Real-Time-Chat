import React, { useState, useEffect } from 'react'

import { Message } from '../../components/Message'

import io from 'socket.io-client'

import { Container, MessageArea, InputMessage, SendMessage } from './style'

export const Chat: React.FC = () => {

    const [ message, setMessage ] = useState<string>('')

    const handleMessage = () => {

        if ( message.trim() ) {

            console.log(message)

        }

    }

    useEffect(() => {

        const socket = io('http://localhost:3001')
           
    }, [])

    return (

        <Container>

            <MessageArea>

                { message &&

                    <Message />

                }

            </MessageArea>

            <InputMessage onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value) } />
            <SendMessage type="button" onClick={ handleMessage } />

        </Container>

    )

}