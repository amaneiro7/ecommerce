import dotenv from 'dotenv'
dotenv.config()
export const config = {
    ACCESS_TOKEN:process.env.MP_ACCESS_TOKEN ?? '',
    PORT:process.env.PORT ?? 3000,
    SERVER_DOMAIN: process.env.SERVER_DOMAIN ?? 'http://localhost:3000',
    INTEGRATOR_ID: process.env.MP_INTEGRATOR_ID,
    SITE_DOMAIN: process.env.SITE_DOMAIN ?? "http://localhost:3000" ,
    GMAIL:{
        EMAIL: process.env.EMAIL,
        APIKEY:process.env.APIKEY
    },
    MONGODB_URI:process.env.MONGODB_URI ?? ""

}
