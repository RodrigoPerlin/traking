import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

const Home = () => {
    return (
        <Grid container>
            <Grid item xs={12} sm={6}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="body1" gutterBottom>
                        Starred Pge
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper>Conteúdo 2</Paper>
            </Grid>
        </Grid>
    )
}

export default Home
