import styled, { css } from 'styled-components'

export const Container = styled.div`
    padding: 0;
    margin: auto;

    div, h1 {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const PlayButton = styled.button`
    display: block;
    margin: 0 auto;
    width: 50%;
    height: 50px;
    border: none;
    border-radius: 8px; 
    color: #fff;
    background-color: green;
    outline: none;
`
