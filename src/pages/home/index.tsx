import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import imgHome from '../../assets/img/home_correios.webp'
import * as S from '../../components/Pages/Home/home.styled'
import CardsHome from '../../components/Pages/Home/CardsHome'
import ContainerBrand from '../../components/Pages/Home/ContainerBrand'
import { searchTraking } from '../../services/search'
import router from 'next/router'
import { Modal, Typography } from '@mui/material'

interface IHomeProps {
    lists: IList[]
}
interface IList {
    sku: string
    name: string
    testimony: string
}

const Home = ({ lists }: IHomeProps) => {
    const [inputValue, setInputValue] = useState('')
    const [nullValue, setNullValue] = useState<boolean>(true)
    const [isPackage, setIsPackage] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleClose = () => {
        setIsPackage(false)
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    async function handleClick() {
        if (inputValue) {
            try {
                const response = await searchTraking(inputValue)
                if (response[0]?.code) {
                    setIsLoading(true)
                    void router.push(`/search/${inputValue}`)
                } else {
                    setIsPackage(true)
                }
            } catch (error) {
                setIsPackage(false)
                console.error(error)
            }
        } else {
            setNullValue(false)
        }
    }

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        color: '#19379c',
        bgcolor: 'background.paper',
        border: '2px solid #fab013',
        boxShadow: 24,
        p: 4,
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' && inputValue) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            handleClick()
        } else if (!inputValue) {
            setNullValue(false)
        }
    }
    const helperText =
        !nullValue && !inputValue
            ? 'Insira o código de rastreamento para localizar o seu pacote com facilidade'
            : ''
    console.log(nullValue, !inputValue)
    return (
        <Box>
            <Grid gap={3} container alignItems={'center'}>
                <Grid item xs={12} sm={6}>
                    <Image
                        src={imgHome}
                        id="imgHome"
                        data-cy="img-home"
                        alt="Imagem tela inicial"
                        loading="lazy"
                        layout="responsive"
                        title="Imagem tela inicial"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <ContainerBrand
                        handleChange={handleChange}
                        inputValue={inputValue}
                        handleClick={handleClick}
                        handleKeyDown={handleKeyDown}
                        helperText={helperText}
                        isLoading={isLoading}
                    />
                </Grid>
            </Grid>

            <Modal
                open={isPackage}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h4"
                        component="h2"
                        fontWeight={800}
                    >
                        Opssss
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Não encontramos seu pacote. Verifique o número de
                        rastreamento e tente novamente, ou entre em contato
                        conosco para obter assistência.
                    </Typography>
                </Box>
            </Modal>

            <Box margin={'10px 0px'}>
                <S.StyledDivider color="#fab013" />
                <S.StyledDivider color="#19379c" />
            </Box>
            <CardsHome lists={lists} />
        </Box>
    )
}

export default Home
