import React from 'react'
import * as S from './Footer.styled'

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Box, Typography } from '@mui/material'

const Footer = () => {
    return (
        <S.Footer>
            <Box justifyContent={'center'} display={'flex'}>
                <Box maxWidth="lg">
                    <Box display={'flex'}>
                        <Typography variant="body2">
                            &copy; {new Date().getFullYear()}
                        </Typography>
                        <Typography variant="body2" ml={5}>
                            Encontre.com. Todos os direitos reservados.
                        </Typography>
                    </Box>
                    <Box>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="facebook"
                        >
                            <FacebookIcon />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="instagram"
                        >
                            <InstagramIcon />
                        </a>
                    </Box>
                </Box>
            </Box>
        </S.Footer>
    )
}
export default Footer
