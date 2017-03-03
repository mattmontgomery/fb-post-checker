const rssFeedPath = process.env.RSS_FEED_PATH;
const rssFeedHost = process.env.RSS_FEED_HOST;

const http = require('http');
const { inspect } = require('util');
const parse = require('xml-parser');

module.exports = (fbList) => {
    return new Promise((resolve, reject) => {
        console.log(`Requesting from ${rssFeedHost}${rssFeedPath}`)
        let body = '';
        http.get({
            hostname: rssFeedHost,
            path: rssFeedPath
        }, (res) => {
            res.on('data', data => body += data);
            res.on('end', () => {
                const parsedBody = parse(body);
                const entries = parsedBody.root.children.filter(({ name }) => name === 'entry');
                const rss = entries.map(parseEntry);
                resolve({ rss, fbList });
            })
        })
    });
}

function parseEntry(entry) {
    const returnObj = {};
    entry.children.forEach(c => {
        returnObj[c.name] = c.content;
    });
    return returnObj;
}
