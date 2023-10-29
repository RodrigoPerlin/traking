import React from 'react'
import Search from '.'
import { searchTraking } from '../../services/search'

const SearchPage = (props) => <Search {...props} />

export async function getStaticProps(context) {
    const { slug } = context?.params
    const packageSearch = await searchTraking(slug)
    return {
        props: { results: packageSearch?.results || [] },
    }
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { slug: '10Aa' } }, { params: { slug: '2020' } }],
        fallback: false,
    }
}

export default SearchPage
