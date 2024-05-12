import styled from 'styled-components'
import { color } from '@/utils/styles'

export const FooterWrapper = styled.footer`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 2rem 10rem;
    min-height: 350px;
    background-color: ${color.dark};
    color: ${color.white};
    
    @media(max-width: 1300px) {
        padding: 2rem 2rem;
    }
    
    @media(max-width: 700px) {
        display: block;
    }
`

export const FooterForm = styled.div`
    flex: 1;
`

export const FooterText = styled.h1`
    font-size: 4rem;
    margin: 0;
    flex: 1;
`

export const TextInput = styled.input`
    display: block;
    width: 100%;
    padding: 0.5rem;
    margin: 1rem 0;
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    background-color: ${color.white};
    color: ${color.dark};
    
    &:disabled {
        background-color: ${color.grey};
    }
`

export const TextArea = styled.textarea`
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 0.5rem;
    resize: vertical;
    height: 100px;
    max-height: 200px;
    border: none;
    border-radius: 5px;
    background-color: ${color.white};
    color: ${color.dark};
    font-family: inherit;

    &:disabled {
        background-color: ${color.grey};
    }
`

export const CopyrightText = styled.p`
    position: absolute;
    bottom: 0;
    font-size: 1rem;
    padding: 1rem;
    margin: 0;
    flex: 1;
`