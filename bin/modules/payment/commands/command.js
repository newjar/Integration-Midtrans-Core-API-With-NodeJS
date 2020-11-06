const Midtrans = require('../../../helpers/midtrans/sdk');

class Command {
  async insertMidtransCharge(paymentType, grossAmount, orderId, bank) {
    Midtrans.init();
    const result = await Midtrans.createMidtransCharge(paymentType, grossAmount, orderId, bank);
    return result;
  }
}

module.exports = Command;
