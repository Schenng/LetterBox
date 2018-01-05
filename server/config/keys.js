  if (process.env.NODE_ENV === 'production') {
    console.log("Using production config");
    module.exports = require('./prod');
  } else {
    module.exports = require('./dev');
  }
