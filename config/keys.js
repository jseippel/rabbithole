// keys.js - Figure out which set of kcredentials to return
if (process.env.NODE_ENV === 'production') {
    // We are in production - return the prod set of keys
    require('./prod') = require('./prod');
} else {
    // We are in development - return the dev keys
    require('./dev') = require('./dev');
}
