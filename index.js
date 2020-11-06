const express = require('express');
const config = require('./bin/helpers/configs/global_config');
const bodyParser = require('body-parser');
const port = config.get('/port');
const app = express();
const commandHandler = require('./bin/modules/payment/commands/command_handler');
const queryHandler = require('./bin/modules/payment/queries/query_handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Yeay!');
});

app.get('/api/v1/transaction/:orderId/status', async (req, res) => {
  const { orderId } = req.params;
  const result = await queryHandler.checkStatusPayment(orderId);
  if (result.err) {
    return res.send(result.err.code, {
      success: result.err.status,
      data: '',
      message: result.err.message,
      code: result.err.code,
    });
  }
  return res.send(result.data.status_code, {
    success: true,
    data: result.data,
    message: 'Success Check Status Transaction',
    code: result.data.status_code,
  });
});

app.post('/api/v1/transaction/charge', async (req, res) => {
  const payload = req.body;
  const result = await commandHandler.insertChargeTransaction(payload);
  if (result.err) {
    return res.send(result.err.code, {
      success: result.err.status,
      data: '',
      message: result.err.message,
      code: result.err.code,
    });
  }
  return res.send(200, {
    success: true,
    data: result.data,
    message: result.data.status_message,
    code: 200,
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is runnning at http://localhost:${port}`);
});
