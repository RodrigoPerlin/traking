import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import * as S from './search.styled'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

interface IStatusCircle {
    status: string
    // eslint-disable-next-line @typescript-eslint/ban-types
    temp: Function
    color: string
    timer: boolean
}

function StatusCircle({ status, temp, color, timer }: IStatusCircle) {
    if (timer) {
        setTimeout(() => {
            temp()
        }, 2000)
    }
    const listStatus = {
        Criado: <S.StyledAddLocationIcon color={color} />,
        Despacho: <S.StyledFileDownloadDoneIcon color={color} />,
        Transito: <S.StyledFlightIcon color={color} />,
        'Saiu Entrega': <S.StyledDirectionsBusIcon color={color} />,
        Entregue: <S.StyledMoodIcon color={color} />,
    }

    return (
        <Grid key={status + color} item xs={12} sm={2}>
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                {color && <ArrowForwardIcon />}
                <Box>
                    <S.Circle statusBars={color}>{listStatus[status]}</S.Circle>
                    <Typography
                        data-testid="status-element"
                        fontWeight={800}
                        color={'#120c56'}
                        variant="h6"
                    >
                        {status}
                    </Typography>
                </Box>
            </Box>
        </Grid>
    )
}

export default React.memo(StatusCircle)
