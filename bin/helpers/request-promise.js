const rp = require('request-promise');
const wrapper = require('./wrapper');

const requestPromise = async (options) => {
  options.json = true;
  return await rp(options)
    .then((res) => {
      if (!res.success) {
        return wrapper.error({ err: true, message: 'Failed Request Data' });
      }
      return wrapper.data(res);
    })
    .catch((_) => {
      return wrapper.error({ err: true, message: 'Failed Request Data' });
    });
};

const requestPromiseMidtrans = async (domain, path, headers, body, query) => {
  const { method, authorization } = headers;
  const options = {
    url: `${domain}${path}`,
    method: method,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      authorization,
    },
    body,
    query,
    json: true,
  };
  return await rp(options)
    .then((res) => {
      const errMessage = 'Failed Request Data';
      const errCode = 500;

      if (res.status_code == 404) {
        return wrapper.error({
          status: false,
          code: 404,
          message: res.status_message,
        });
      }

      if (res.err) {
        return wrapper.error({
          status: false,
          code: errCode,
          message: errMessage,
        });
      }
      return wrapper.data(res);
    })
    .catch((err) => {
      return wrapper.error({ status: false, code: 500, message: err });
    });
};

module.exports = {
  requestPromise,
  requestPromiseMidtrans,
};
