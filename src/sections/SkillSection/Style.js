import styled from 'styled-components'
import { color, fontSizes } from '@/utils/styles.js'

export const SkillSectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 10rem;
    
    @media(max-width: 1300px) {
        padding: 2rem 2rem;
    }
`

export const SkillSectionTitle = styled.h2`
    font-size: ${fontSizes.xl};
    font-weight: bold;
    margin: 0;
`

export const SkillSectionContent = styled.div`
    display: grid;
    width: 100%;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
`
