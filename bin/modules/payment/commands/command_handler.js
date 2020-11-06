const Payment = require('./domain');

const insertChargeTransaction = async (payload) => {
  const payment = new Payment();
  const postCommand = async (payload) => payment.insertChargeTransaction(payload);
  return postCommand(payload);
};

const insertCaptureTransaction = async (payload) => {
  const payment = new Payment();
  const postCommand = async (payload) => payment.insertCaptureTransaction(payload);
  return postCommand(payload);
};

module.exports = {
  insertChargeTransaction,
  insertCaptureTransaction,
};
