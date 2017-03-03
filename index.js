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
    .then(outputMissing)
;

/*f.api('oauth/access_token', {
    client_id: appId,
    client_secret: appSecret,
    grant_type: 'client_credentials'
}).then(res => {
    const { error, access_token } = res;
    if(error) {
        console.log(error);
        return;
    }
    if(access_token) {
        console.log(access_token);
    }
});*/

/*const url = fb.getLoginUrl({
    client_id: appId,
    redirect_uri: "http://localhost:8080/auth"
});

console.log(`URL: ${url}`);*/

/*app.all('/auth', auth(app), () => {
    fb.api(
        '/rslsoapbox',
        Object.assign({}, options, {
            access_token: app.locals.token,
            field_list: 'link,name,description,type,created_time,shares,likes'
        }),
        (res) => {
            console.log(res)
        }
    );

});*/

/*app.listen(8080);*/

/*const token = fb.getAccessToken();
console.log(token);

fb.api('4', (res) => {
    console.log(res);
    return res;
});*/
