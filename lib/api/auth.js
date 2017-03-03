const appId = process.env.FB_APP_ID;
const appSecret = process.env.FB_APP_SECRET;

module.exports = (fb) => {
    return new Promise((resolve, reject) => {
        fb.api('oauth/access_token', {
            client_id: appId,
            client_secret: appSecret,
            grant_type: 'client_credentials'
        }, res => {
            const { error, access_token } = res;
            if(error || !access_token) {
                console.log(error);
                reject();
            } else if(access_token) {
                resolve(access_token);
            }
        });
    });
}
