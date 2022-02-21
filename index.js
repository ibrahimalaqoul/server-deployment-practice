'use strict'

require('dotenv').config();

const server = require('./server.js');

server.serverCheck(process.env.PORT || 3005);
