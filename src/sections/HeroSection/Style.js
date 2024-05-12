import styled from 'styled-components'
import {color, fontSizes} from '@/utils/styles.js'

export const HeroWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    color: ${color.white};
    padding: 5rem 10rem;

    @media(max-width: 1300px) {
        flex-direction: column-reverse;
        padding: 2rem 2rem;
    }
`

export const HeroContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: min(5rem, 4vh) 0;
    
    @media(max-width: 1300px) {
        text-align: center;
        align-items: center;
    }
`

export const HeroTitle = styled.h1`
    font-size: ${fontSizes.xl};
    font-weight: bold;
    margin: 0;
`

export const HeroSubtitle = styled.p`
    font-size: ${fontSizes.lg};
    font-weight: lighter;
    margin: 0;
`

export const HeroImage = styled.div`
    margin-left: auto;
    position: relative;
    aspect-ratio: 1/1;
    width: 100%;
    max-width: 500px;
    border-radius: 100%;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    
    & img {
        position: absolute;
        top: -5%;
        left: -10%;
        width: 120%;
        height: 120%;
        object-fit: cover;
        transition: transform 0.3s;
    }
    
    @media(max-width: 1300px) {
        width: max(80%, 200px);
        margin: 0 auto;
    }
`

export const HeroImageWrapper = styled.div`
    position: relative;
    flex: 1;
    transition: transform 0.3s;
    
    &:hover {
        transform: scale(1.1);
    }
    
    &:hover img {
        transform: scale(0.9);
    }
    
    @media(max-width: 1300px) {
        width: 80%;
    }
`

export const HeroImageBackdrop = styled.div`
    position: absolute;
    display: block;
    top: 10px;
    right: -10px;
    width: 500px;
    height: 500px;
    background: ${color.highlight};
    border-radius: 100%;
    z-index: -1;
    
    @media(max-width: 1300px) {
        display: none;
    }
`