// check  Env
const env = process.env.NODE_ENV || 'development';

// import env
var config = require('./config.json');
var envConfig =  config[env];
// add values to env
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);
