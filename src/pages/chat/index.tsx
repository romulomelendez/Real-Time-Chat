import React, { useState } from 'react'

import { Message } from '../../components/Message'

import { Container, MessageArea, InputMessage, SendMessage } from './style'

export const Chat: React.FC = () => {

    const [ message, setMessage ] = useState<string>('')

    const handleMessage = () => {

        if ( message.trim() ) {

            console.log(message)

        }
        

    }

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