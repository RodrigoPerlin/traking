import styled from 'styled-components'
import { Divider } from '@mui/material'

export const StyledDivider = styled(Divider)<{ color: string }>`
    background-color: ${(props) => props.color};
`
export const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    color: '#19379c',
    bgcolor: 'background.paper',
    border: '2px solid #fab013',
    boxShadow: 24,
    p: 4,
}
