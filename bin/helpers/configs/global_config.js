require('dotenv').config();
const confidence = require('confidence');

const config = {
  port: process.env.PORT,
  midtransConfig: {
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY,
  },
  midtransDomain: process.env.MIDTRANS_SANDBOX_ENDPOINT,
  midtransToken: process.env.MIDTRANS_TOKEN,
};

const store = new confidence.Store(config);
exports.get = (key) => store.get(key);
