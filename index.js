import express from 'express';
import cors from 'cors';
import {socketClientConnector} from "./services/socketClientConnector.js";
import {getOHLC} from "./services/aggregator.js";
import 'dotenv/config'

const app = express();
const PORT = process.env.SERVER_PORT;

socketClientConnector()

app.use(cors());
app.use(express.static('public'))

app.get('/api/ohlc/:city', (req, res) => {
    const city = req.params.city;
    const data = getOHLC(city);
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`📡 OHLC API running on http://localhost:${PORT}`);
});