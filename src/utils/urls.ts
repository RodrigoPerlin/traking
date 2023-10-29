export const ENVIRONMENT =
    process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3000'
        : 'https://encontrecom.vercel.app/api'
