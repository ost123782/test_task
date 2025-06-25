export default async function fetchData(city) {
    return fetch(`/api/ohlc/${city}`)
        .then(res => res.json())
        .catch(err =>{
            throw err;
        })
}