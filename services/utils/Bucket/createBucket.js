export default function createBucket (entryData, hourKey) {
    return {
        open: entryData.temperature,
        high: entryData.temperature,
        low: entryData.temperature,
        close: entryData.temperature,
        timestamp: hourKey,
    }
}