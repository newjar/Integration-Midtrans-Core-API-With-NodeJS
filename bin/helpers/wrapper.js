const data = (data) => ({ err: null, data });
const error = (err, data = null) => ({ err, data });

module.exports = {
  data,
  error,
};
