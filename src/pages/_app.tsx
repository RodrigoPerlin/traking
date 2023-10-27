import React from 'react'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import { type AppProps } from 'next/app'
import ThemeRegistry from '../components/ThemeRegistry/ThemeRegistry'
import Footer from '../components/Footer'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeRegistry>
            <AppBar position="fixed" sx={{ zIndex: 2000 }}>
                <Toolbar sx={{ backgroundColor: 'background.paper' }}>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        color="#19379c"
                        fontWeight={600}
                    >
                        Encontre.com
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: 'background.default',
                    mt: ['48px', '56px', '64px'],
                    p: 3,
                }}
            >
                <Container>
                    <Component {...pageProps} />
                </Container>
            </Box>
            <Footer />
        </ThemeRegistry>
    )
}
export default App
