const cityData = {};

function recordEvent({ city, temperature, timestamp }) {
    const time = new Date(timestamp);
    if (!cityData[city]) cityData[city] = [];
    cityData[city].push({ time, temperature });
}

function getOHLC(city) {
    const data = cityData[city] || [];
    const buckets = {};
    for (const entry of data) {
        console.log(entry)
        const hourKey = new Date(entry.time);
        hourKey.setMinutes(0, 0, 0);
        const key = hourKey.toISOString();

        if (!buckets[key]) {
            buckets[key] = {
                open: entry.temperature,
                high: entry.temperature,
                low: entry.temperature,
                close: entry.temperature,
                timestamp: hourKey,
            };
        } else {
            buckets[key].high = Math.max(buckets[key].high, entry.temperature);
            buckets[key].low = Math.min(buckets[key].low, entry.temperature);
            buckets[key].close = entry.temperature;
        }
    }
    console.log(Object.values(buckets))
    return Object.values(buckets);
}

module.exports = { recordEvent, getOHLC };
