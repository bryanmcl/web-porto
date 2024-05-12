import styled from 'styled-components'
import { color } from '@/utils/styles'

export const ProjectSectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
    padding: 5rem 10rem;

    @media(max-width: 1300px) {
        padding: 2rem 2rem;
    }
`

export const ProjectSectionTitle = styled.h2`
    font-size: 3rem;
    font-weight: bold;
    margin: 0;
`

export const ProjectItem = styled.div`
    height: 200px;
    padding: 1rem;
    border-radius: 10px;
    background-color: ${color.white};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`

export const ProjectSectionContent = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    
    & ${ProjectItem}:nth-child(2) {
        grid-column-start: span 2
    }
    
    & ${ProjectItem}:nth-child(3) {
        grid-column-start: span 3
    }
    
    @media(max-width: 700px) {
        display: block;
        
        & ${ProjectItem} {
            margin: 1rem 0;
        }
    }
`

