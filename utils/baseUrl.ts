const baseUrl = process.env.NODE_ENV === "production" ? process.env.VERCEL_URL : 'http://localhost:3000'

export default baseUrl