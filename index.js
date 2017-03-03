const Promise = require('bluebird');
const { Facebook, FacebookApiException } = require('fb');

const express = require('express');
const app = express();

require('dotenv').config();

const appId = process.env.FB_APP_ID;
const appSecret = process.env.FB_APP_SECRET;

const options = {
    appId,
    appSecret,
    version: 'v2.8'
};

const fb = new Facebook(options);
const f = Promise.promisifyAll(fb);

const auth = require('./lib/api/auth');
const page = require('./lib/api/page');
const links = require('./lib/rss/links');
const compareLinks = require('./lib/compareLinks');
const outputMissing = require('./lib/outputMissing');

auth(fb)
    .then(token => page(fb, token))
    .then(list => links(list))
    .then(compareLinks)
    .then(outputMissing);
