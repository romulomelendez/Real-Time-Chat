import React, { createContext, useState } from 'react'

type UserPropsContext = {

    userName: string,
    setUserName: React.Dispatch<React.SetStateAction<string>>

}

const UserContext = createContext<UserPropsContext>({ userName: '', setUserName: () => {} })

const UserContextProvider: React.FC = ({ children }) => {

    const [ userName, setUserName ] = useState<string>('')

    return (

        <UserContext.Provider value={{ userName, setUserName }}>

            { children }
            
        </UserContext.Provider>

    )

}

export { UserContextProvider }
export default UserContext