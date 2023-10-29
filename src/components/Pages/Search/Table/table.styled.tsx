import styled from 'styled-components'

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: 2px solid #fab013;
    background-color: #fff;
`

export const Head = styled.thead`
    background-color: #fab013;
    color: #19379c;
`

export const StyledColumm = styled.th`
    padding: 20px;
    border: 1px solid #fab013;
`

export const StyledTr = styled.tr`
    color: #19379c;
    &:nth-child(even) {
        background-color: #f5f5f5;
    }
`

export const StyledTd = styled.td`
    padding: 15px;
    text-align: center;
    border: 1px solid #fab013;
`
