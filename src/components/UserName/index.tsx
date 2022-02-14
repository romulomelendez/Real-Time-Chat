import React, { useContext } from 'react'

import UserContext from '../../context/UserContext'

import { Input } from './style'

export const UserName: React.FC  = () => {

    const { userName, setUserName } = useContext(UserContext)

    return (

        <Input type="text" placeholder="Type your Username" onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value) } value={userName} />

    )

}