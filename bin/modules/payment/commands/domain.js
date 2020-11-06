const Command = require('./command');
const wrapper = require('../../../helpers/wrapper');

class Payment {
  constructor(db) {
    this.command = new Command(db);
  }

  async insertChargeTransaction(payload) {
    const { paymentType, grossAmount, orderId, bank } = payload;
    if (!paymentType || !grossAmount || !orderId || !bank) {
      return wrapper.error({
        status: false,
        code: 409,
        message: 'PaymentType, grossAmount, orderId, bank must be supplied',
      });
    }
    const data = {
      payment_type: paymentType,
      transaction_details: {
        gross_amount: grossAmount,
        order_id: orderId,
      },
      bank_transfer: {
        bank,
      },
    };
    const result = await this.command.insertMidtransCharge(data);
    if (result.err) {
      let errMsg = result.err.status_message;
      let errCode = result.err.status_code;
      if (errCode == 406) {
        errMsg = 'Duplicate order ID';
      }
      return wrapper.error({
        status: false,
        code: parseInt(errCode),
        message: errMsg,
      });
    }
    delete result.data.status_code;
    return wrapper.data(result.data);
  }
}

module.exports = Payment;
