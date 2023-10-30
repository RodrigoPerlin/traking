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
        <Box
            id="table-status"
            margin={10}
            justifyContent={'center'}
            display={'flex'}
        >
            <S.StyledTable>
                <S.Head>
                    <tr>
                        <S.StyledColumm data-testid="status-data">
                            Data
                        </S.StyledColumm>
                        <S.StyledColumm data-testid="status-detalhes">
                            Detalhes
                        </S.StyledColumm>
                        <S.StyledColumm data-testid="status-start">
                            Cidade Inicial
                        </S.StyledColumm>
                        <S.StyledColumm data-testid="status-end">
                            Cidade da entrega
                        </S.StyledColumm>
                    </tr>
                </S.Head>
                <tbody>
                    {info?.map((item, index) => (
                        <S.StyledTr key={index + item.id}>
                            <S.StyledTd key={item.date}>{item.date}</S.StyledTd>
                            <S.StyledTd key={item.details + index}>
                                {item.details}
                            </S.StyledTd>
                            <S.StyledTd key={item.city_start + index}>
                                {item.city_start}
                            </S.StyledTd>
                            <S.StyledTd key={item.city_end + index}>
                                {item.city_end}
                            </S.StyledTd>
                        </S.StyledTr>
                    ))}
                </tbody>
            </S.StyledTable>
        </Box>
    )
}
export default Table
