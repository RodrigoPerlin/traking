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
    const slugs = ['10Aa', '2020']
    const path = slugs?.map((slug) => ({
        params: { slug },
    }))

    return {
        paths: path,
        fallback: false,
    }
}

export default SearchPage
