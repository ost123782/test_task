const WebSocket = require('ws');
const { recordEvent } = require('./aggregator');

function socketClientConnector() {
    const ws = new WebSocket(process.env.WEBSOCKET_URL);

    ws.on('open', () => {
        console.log('🌐 Connected to weather WebSocket server');
    });

    ws.on('message', (msg) => {
        const event = JSON.parse(msg);
        recordEvent(event);
    });

    ws.on('close', () => {
        console.log('🔁 Disconnected. Reconnecting...');
        setTimeout(connect, 1000);
    });

    ws.on('error', () => ws.close());
}

module.exports = {socketClientConnector}