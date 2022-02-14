import { ButtonHTMLAttributes } from 'react'
import { Btn } from './style'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

    name: string

}

export const Button: React.FC<ButtonProps> = ({ name }) => (

    <Btn type="submit">{ name }</Btn>
    
)