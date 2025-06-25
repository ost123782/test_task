import createBucket from "./utils/Bucket/createBucket.js";
import SetBucketTemperature from "./utils/Bucket/setBucketTemperature.js";

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
        const hourKey = new Date(entry.time);
        const key = hourKey.toISOString();

        if (!buckets[key]) {
            buckets[key] = createBucket(entry, hourKey);
        } else {
            SetBucketTemperature(buckets[key], entry.temperature);
        }
    }
    return Object.values(buckets);
}


export {getOHLC, recordEvent}