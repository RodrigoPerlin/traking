import React from 'react'
import Home from './home'
import { searchDepositions } from '../services/home'

const HomePage = (props) => <Home {...props} />

export async function getStaticProps() {
    const depositions = await searchDepositions()

    const lastIndex = depositions?.length - 1
    const lastThree = depositions?.slice(
        Math?.max(lastIndex - 2, 0),
        lastIndex + 1
    )
    return {
        props: {
            lists: lastThree || null,
        },
    }
}

export default HomePage
