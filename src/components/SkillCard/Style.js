import styled from 'styled-components'
import { color } from '@/utils/styles'

export const CardImage = styled.img`
    width: 80%;
    aspect-ratio: 1/1;
    object-fit: contain;
    transition: transform 0.3s;
`

export const CardTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0.5rem 0;
    transition: transform 0.3s;
    
    @media(max-width: 700px) {
        font-size: 2rem;
    }
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border-radius: 10px;
    background-color: ${color.secondary};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: filter 0.3s;
    
    &:hover {
        filter: drop-shadow(0 0 10px ${color.secondary});
    }
    &:hover ${CardImage} {
        transform: scale(0.9);
    }
    
    &:hover ${CardTitle} {
        transform: scale(1.2);
    }
`



