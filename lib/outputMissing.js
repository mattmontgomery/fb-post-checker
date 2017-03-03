const { inspect } = require('util');
const colors = require('colors');

module.exports = (missingItems = []) => {
    return new Promise((resolve, reject) => {
        console.log('The following items have yet to be posted on Facebook'.green);
        missingItems.forEach(item => {
            console.log(`${item.title.red.bold}`)
            console.log(item.id.blue.underline);
            console.log();
        });
    });
};
