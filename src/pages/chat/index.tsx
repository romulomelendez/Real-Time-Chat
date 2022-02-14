import React, { useState } from 'react'

import { Message } from '../../components/Message'

import { SendMessage } from '../../components/SendMessage'

//import io from 'socket.io-client'

import { Container, MessageArea, InputMessage } from './style'

export const Chat: React.FC = () => {

    const [ message, setMessage ] = useState<string[]>([])

    const handleMessage = () => {

        if ( message.length === 0 ) {

            console.log('Não tem mensagem!')

        } else
            console.log(message)

    }

    // useEffect(() => {

    //     const socket = io('http://localhost:3001')
    //     socket.on('connection', socket => {
            
    //         console.log('Connectou', socket.id)
    //         socket.on('msg', (data: string) => {

    //             console.log(data)
    //             socket.emit('msg', 'mandando do Front')

    //         }) 
            
    //     })
        
    // }, [message])

    return (

        <Container>

            <MessageArea>

                {
                    message &&

                    <Message />

                }

                <div>

                    <InputMessage
                        onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setMessage([e.target.value]) }
                        value={ message }
                    />
                    <SendMessage name="SEND" onClick={ handleMessage } />

                </div>
               
            </MessageArea>

        </Container>

    )

}