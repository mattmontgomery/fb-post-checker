const appId = process.env.FB_APP_ID;
const appSecret = process.env.FB_APP_SECRET;
const fbPage = process.env.FB_PAGE_ID;

module.exports = (fb, token) => {
    return new Promise((resolve, reject) => {
        fb.api(`${fbPage}/posts`, {
            client_id: appId,
            client_secret: appSecret,
            access_token: token,
            fields: 'id,link',
            limit: 25
        }, res => {
            const { error } = res;
            if(error) {
                console.log(error);
                reject(error);
            } else if(Array.isArray(res.data)) {
                resolve(res.data);
            }
        });
    });
}
