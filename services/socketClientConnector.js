import WebSocket from 'ws';
import {recordEvent} from "./aggregator.js";


function socketClientConnector() {
    const ws = new WebSocket(process.env.WEBSOCKET_URL);

    ws.on('message', (msg) => {
        const event = JSON.parse(msg);
        recordEvent(event);
    });

    ws.on('close', () => {
        setTimeout(socketClientConnector, 1000);
    });

    ws.on('error', () => ws.close());
}

export { socketClientConnector };