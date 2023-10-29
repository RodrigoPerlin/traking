import React from 'react'

import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from '@mui/material'

interface ICardsHomeProps {
    lists: IList[]
}
interface IList {
    sku: string
    name: string
    testimony: string
}

const CardsHome = ({ lists }: ICardsHomeProps) => {
    return (
        <Grid gap={5} container justifyContent={'center'}>
            {lists.map(({ testimony, name, sku }) => {
                return (
                    <Grid key={sku + name + testimony} item xs={12} sm={3}>
                        <Card border->
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    color="#19379c"
                                >
                                    {name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    minHeight={80}
                                    data-testid="testimony-element"
                                >
                                    {testimony}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}
export default CardsHome
