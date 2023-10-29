import React, { useEffect, useState } from 'react'

import Grid from '@mui/material/Grid'
import { Box, Button, Typography } from '@mui/material'
import Table from '../../components/Pages/Search/Table'
import StatusCircle from '../../components/Pages/Search/StatusCircle'

interface ISearch {
    results: IResults[]
}

interface IResults {
    id: string
    date: string
    status: string
    details: string
    city_start: string
    city_end: string
}

const Search = ({ results }: ISearch) => {
    const [count, setCount] = useState(1)
    const [list, setList] = useState([{ status: 'Criado', color: 'Criado' }])
    const [statusPackage, setStatusPackage] = useState([])

    const listStatus = [
        'Criado',
        'Despacho',
        'Transito',
        'Saiu Entrega',
        'Entregue',
    ]

    const statusList = results?.map((item) => item?.status)

    useEffect(() => {
        function adicionarNome() {
            const status = listStatus?.map((item, index) => ({
                status: item,
                color: statusList[index],
            }))
            setStatusPackage(status)
        }
        adicionarNome()
    }, [])

    const temp = () => {
        setCount(count + 1)
        if (statusPackage?.length > count) {
            setList([
                ...list,
                {
                    status: statusPackage[count].status,
                    color: statusPackage[count].color,
                },
            ])
        }
    }
    return (
        <Box>
            <Box display={'flex'} justifyContent={'space-between'}>
                <Box m={5}>
                    <Button
                        sx={{ borderColor: '#fab013' }}
                        variant="outlined"
                        size="large"
                        href="/"
                    >
                        Página Inicial
                    </Button>
                    <Box>
                        <Typography
                            gutterBottom
                            variant="h4"
                            component="div"
                            color="#19379c"
                            fontWeight={800}
                        >
                            Status do seu Pedido:
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Grid container>
                {list?.map(({ status, color }, index) => {
                    return (
                        <StatusCircle
                            status={status}
                            temp={temp}
                            key={index + status}
                            color={color}
                            timer={count < 7}
                        />
                    )
                })}
            </Grid>
            <Table info={results} />
        </Box>
    )
}

export default Search
