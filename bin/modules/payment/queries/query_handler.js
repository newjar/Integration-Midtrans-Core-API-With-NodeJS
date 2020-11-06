const Payment = require('./domain');

const checkStatusPayment = async (query) => {
  const payment = new Payment();
  const getData = async (query) => payment.checkStatusPayment(query);
  return getData(query);
};

module.exports = {
  checkStatusPayment,
};
