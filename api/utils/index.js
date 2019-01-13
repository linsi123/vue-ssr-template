const request = require("request");

class Utils {
    /**
     * promise化request
     * @param {object} opts 
     * @return {Promise<[]>}
     */
    static promiseReq(opts = {}) {
        return new Promise((resolve, reject) => {
            request(opts,(err, res, body) => {
    
            if (err) {
                return reject(err);
            }
            if (res.statusCode != 200) {
                return reject(`back statusCode：${res.statusCode}`);
            }
            return resolve(body);
            });
        })
    };


}


module.exports = Utils