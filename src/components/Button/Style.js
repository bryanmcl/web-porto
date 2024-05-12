import styled from 'styled-components'
import { color } from '@/utils/styles'

export const ButtonWrapper = styled.button`
    display: block;
    width: fit-content;
    margin: 2rem 0;
    background: none;
    border: 5px solid ${color.primary};
    border-radius: 100px;
    color: ${color.primary};
    padding: 1rem 2rem;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: filter 0.3s;
    transition: background 0.1s;
    
    ${(props) => props.size === 'sm' && `
        padding: 0.5rem 2rem;
        font-size: 1rem;
        border-width: 3px;
    `}

    ${(props) => props.isLoading && `
        pointer-events: none;
        filter: grayscale(1);
    `}
    
    &:hover {
        filter: drop-shadow(0 0 20px ${color.primary});
        background: ${color.primary};
        color: ${color.white};
    }
`