import React from 'react'

import { Box, Button, TextField, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

interface IContainerBrand {
    handleKeyDown: (e: any) => any
    handleClick: () => void
    handleChange: (e: any) => any
    inputValue: string
    helperText: string
}

const ContainerBrand = ({
    handleKeyDown,
    handleClick,
    handleChange,
    inputValue,
    helperText,
}: IContainerBrand) => {
    return (
        <Box minHeight={'70vh'} textAlign={'center'}>
            <Box mb={'5vh'} textAlign={'center'}>
                <Typography
                    data-testid="find-element"
                    fontWeight={600}
                    color="#19379c"
                    variant="h2"
                >
                    Encontre
                </Typography>
                <Typography fontWeight={600} color="#19379c" variant="h2">
                    .com
                </Typography>
            </Box>
            <Box minHeight={100} display={'flex'}>
                <TextField
                    fullWidth
                    data-cy="codigo-rastreio"
                    tabIndex={0}
                    name="codigo-rastreio"
                    id="Codigo de Rastreio"
                    aria-label="Codigo de Rastreio"
                    label="Seu Código de Rastreio"
                    variant="outlined"
                    onChange={handleChange}
                    value={inputValue}
                    helperText={helperText}
                />
                <Box padding="1vh">
                    <Button
                        onKeyDown={(e: any) => {
                            handleKeyDown(e)
                        }}
                        variant="outlined"
                        size="large"
                        endIcon={<SendIcon />}
                        onClick={handleClick}
                    >
                        Enviar
                    </Button>
                </Box>
            </Box>
            <Box mt={'5vh'}>
                <Typography color="#fab013" variant="h4">
                    Rastrear agora é tão simples que você nem vai acreditar!
                </Typography>
            </Box>
        </Box>
    )
}
export default ContainerBrand
