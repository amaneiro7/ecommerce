export const config = {
    mpPublicKey:import.meta.env.VITE_MP_PUBLIC_KEY,
    libraryUri:'https://sdk.mercadopago.com/js/v2',
    server:import.meta.env.VITE_MP_SERVER ?? 'http://localhost:3000'
}