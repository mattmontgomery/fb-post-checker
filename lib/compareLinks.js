const { inspect } = require('util');

module.exports = ({ rss, fbList }) => {
    return new Promise((resolve, reject) => {
        const items = rss.filter(item => {
            if(fbList.some(fbItem => fbItem.link === item.id)) {
                return null;
            } else {
                return true;
            }
        });
        resolve(items);
    });
};
