import React from 'react'
import Search from '.'
import { searchTraking } from '../../services/search'

const SearchPage = (props) => <Search {...props} />

export async function getStaticProps(context) {
    const { slug } = context?.params
    const results = await searchTraking(slug)

    return {
        props: results[0],
    }
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { slug: '10Aa' } }, { params: { slug: '2020' } }],
        fallback: false,
    }
}

export default SearchPage
