import React from 'react'
import { Box, Button, Typography } from '@mui/material'

const Custom404 = () => {
    return (
        <Box
            justifyContent={'center'}
            display={'flex'}
            width={'80vh'}
            height={'80vh'}
            alignItems={'center'}
        >
            <Box>
                <Typography fontWeight={800} color={'#120c56'} variant="h1">
                    Desculpe, Página Não Encontrada.
                </Typography>
                <Typography>
                    Estamos trabalhando para aprimorar sua experiência.
                </Typography>
                <Typography>
                    Enquanto isso, que tal explorar nossos outros recursos?
                </Typography>

                <Box margin={10}>
                    <Button
                        sx={{ borderColor: '#fab013' }}
                        variant="outlined"
                        size="large"
                        href="/"
                    >
                        Página Inicial
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Custom404
