import styled from 'styled-components'
import { color } from '@/utils/styles'
export const NavbarWrapper = styled.nav`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: 0 1rem;
    background: ${color.dark};
    z-index: 100;
    
    @media(max-width: 1300px) {
        display: none;
    }
`

export const NavItem = styled.a`
    color: white;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    &:hover {
        color: ${color.primary};
        filter: drop-shadow(0 0 3px ${color.primary});
    }
    
    & img {
        width: 30px;
    }
`
