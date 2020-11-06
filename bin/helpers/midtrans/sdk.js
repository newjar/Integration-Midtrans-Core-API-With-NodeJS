const Midtrans = require('midtrans-client');
const wrapper = require('../wrapper');
const config = require('../configs/global_config');

let midtransClient;

const init = async () => {
  try {
    midtransClient = new Midtrans.CoreApi(config.get('/midtransConfig'));
  } catch (error) {
    return wrapper.error({ status: false, code: 409, message: error });
  }
};

const createMidtransCharge = async (paymentType, grossAmount, orderId, bank) => {
  try {
    const isCharged = await midtransClient.charge(paymentType, grossAmount, orderId, bank);
    if (isCharged) {
      return wrapper.data(isCharged);
    }
  } catch (error) {
    return wrapper.error(error.ApiResponse);
  }
};

module.exports = {
  init,
  createMidtransCharge,
};
