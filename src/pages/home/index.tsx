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
    const [isNotPackage, setNotIsPackage] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleClose = () => {
        setNotIsPackage(false)
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    async function handleClick() {
        if (inputValue) {
            try {
                setIsLoading(true)
                const response = await searchTraking(inputValue)
                if (response?.results) {
                    void router.push(`/search/${inputValue}`)
                } else {
                    setIsLoading(false)

                    setNotIsPackage(true)
                }
            } catch (error) {
                setNotIsPackage(false)
            }
        } else {
            setNullValue(false)
        }
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
                open={isNotPackage}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                id="modal-no-acess"
            >
                <Box sx={S.style}>
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
            <CardsHome lists={lists || []} />
        </Box>
    )
}

export default Home
