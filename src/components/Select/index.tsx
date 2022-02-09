import React from 'react'
import { Choose } from './style'

export const Select: React.FC = () => (

    <Choose name = "chat-class">

        <option value = "java">Java</option>
        <option value = "php">PHP</option>
        <option value = "react.js">React.js</option>
        <option value = "node.js">Node.js</option>    

    </Choose>
    
)