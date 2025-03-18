export type CountryFootprint = {
    id: string
    type: string
    attributes: {
        country: string
        carbon_g: number
        carbon_kg: number
        carbin_lb: number
        carbon_mt: number
        electricity_unit: string
        electricity_value: string
        estimated_at: string
    }
}


export type EcoNews = {
    source: {
        id: string,
        name: string
    },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string
    publishedAt: string,
    content: string
}
