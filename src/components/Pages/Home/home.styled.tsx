import styled from 'styled-components'
import { Divider } from '@mui/material'

export const StyledDivider = styled(Divider)<{ color: string }>`
    background-color: ${(props) => props.color};
`
