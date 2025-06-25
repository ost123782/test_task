export default function SetBucketTemperature (bucket, entryTemperature) {
    bucket.high = Math.max(bucket.high, entryTemperature);
    bucket.low = Math.min(bucket.low, entryTemperature);
    bucket.close = entryTemperature;
}