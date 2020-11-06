const wrapper = require('../../../helpers/wrapper');
const Query = require('./query');

class Payment {
  constructor() {
    this.query = new Query();
  }

  async checkStatusPayment(orderId) {
    if (!orderId) {
      return wrapper.error({ message: 'params orderId must be supplied' });
    }
    const result = await this.query.findStatusTransaction(orderId);
    if (result.err) {
      const error = result.err;
      return wrapper.error({
        status: error.status,
        code: error.code,
        message: error.message,
      });
    }
    return wrapper.data(result.data);
  }
}

module.exports = Payment;
