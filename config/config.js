exports.config = () => {
  const envJSON = require('./env.variables.json');
  const nodeEnv = process.env.NODE_ENV || 'development';
  return envJSON[nodeEnv];
};
