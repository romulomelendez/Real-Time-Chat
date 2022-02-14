import React, { useState } from 'react'

import { Input } from './style'

export const UserName: React.FC  = () => {

    

    return (

        <Input type="text" placeholder="Type your Username" onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value) } value={userName} />

    )

}