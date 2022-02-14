import styled from 'styled-components'

export const Container = styled.div `

    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: green;

`

export const MessageArea = styled.div `

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;

    div {

        display: flex;
        flex-direction: row;
        gap: 10px;

    }

`

export const InputMessage = styled.input `

    display: flex;
    flex-direction: row;
    padding: 10px;
    color: black;
    width: 1250px;
    font-size: 12pt;
    border: .5px solid black;
    border-radius: 10px;
    outline: none;

`