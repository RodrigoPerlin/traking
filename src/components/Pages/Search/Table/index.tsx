import React from 'react'
import * as S from './table.styled'
import { Box } from '@mui/material'

interface ITable {
    info: IInfo[]
}

interface IInfo {
    id: string
    date: string
    status: string
    details: string
    city_start: string
    city_end: string
}

const Table = ({ info }: ITable) => {
    return (
        <Box margin={10} justifyContent={'center'} display={'flex'}>
            <S.StyledTable>
                <S.Head>
                    <tr>
                        <S.StyledColumm data-testid="status-data">
                            Data
                        </S.StyledColumm>
                        <S.StyledColumm data-testid="status-status">
                            Status
                        </S.StyledColumm>
                        <S.StyledColumm data-testid="status-detalhes">
                            Detalhes
                        </S.StyledColumm>
                    </tr>
                </S.Head>
                <tbody>
                    {info?.map((item, index) => (
                        <S.StyledTr key={index + item.id}>
                            <S.StyledTd key={item.date}>{item.date}</S.StyledTd>
                            <S.StyledTd key={index + item.status}>
                                {item.status}
                            </S.StyledTd>
                            <S.StyledTd key={item.details + index}>
                                {item.details}
                            </S.StyledTd>
                        </S.StyledTr>
                    ))}
                </tbody>
            </S.StyledTable>
        </Box>
    )
}
export default Table