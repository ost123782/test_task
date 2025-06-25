import fetchData from "../api/fetchData.js";

export default async function getData(city) {
    return fetchData(city).then(response => {
        return response.map(d => ({
            x: new Date(d.timestamp),
            y: [d.open, d.high, d.low, d.close]
        }))
    })
}