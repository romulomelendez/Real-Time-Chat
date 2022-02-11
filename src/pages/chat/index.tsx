import React from 'react'

import { Message } from '../../components/Message'

import { Container, MessageArea, InputMessage } from './style'

export const Chat = () => {

    return (

        <Container>

            <MessageArea>

                {

                    <Message />

                }

            </MessageArea>

            <InputMessage />

        </Container>

    )

}