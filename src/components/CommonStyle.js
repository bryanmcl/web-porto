import styled from 'styled-components'
import { color } from '@/utils/styles'

export const HighlightText = styled.span`
    color: ${color.primary};
    transition: filter 0.3s;

    &:hover {
        filter: drop-shadow(0 0 10px ${color.primary});
    }
`