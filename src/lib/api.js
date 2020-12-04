import querystring from 'querystring'

const apiKey = 'cc1d5484fa10b37a0931266dd6edfcb8'

export default async function getData(address, queryParams) {
    const res = await fetch(`http://gateway.marvel.com${address}?apikey=${apiKey}&${querystring.stringify(queryParams)}`)
    return await res.json()
}
