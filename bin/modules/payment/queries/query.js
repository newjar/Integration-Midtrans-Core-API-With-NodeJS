const config = require('../../../helpers/configs/global_config');
const rp = require('../../../helpers/request-promise');
const midtransDomain = config.get('/midtransDomain');
const midtransToken = config.get('/midtransToken');

class Query {
  async findStatusTransaction(orderId) {
    const headers = {
      method: 'GET',
      authorization: `Basic ${midtransToken}`,
    };
    const result = await rp.requestPromiseMidtrans(midtransDomain, `/${orderId}/status`, headers);
    return result;
  }
}

module.exports = Query;
