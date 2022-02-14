import { ButtonHTMLAttributes } from 'react'

import { Btn } from './style'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

    name: string

}

export const SendMessage: React.FC<ButtonProps> = ({ name }) => (
    
    <Btn type="button">{ name }</Btn>
    
)

