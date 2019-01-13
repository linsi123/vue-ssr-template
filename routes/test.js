var axios = require('axios')
var express = require('express');
var router = express.Router();
var Utils = require('../api/utils');
/* GET users listing. */
router.get('/', async function(req, res, next) {
    // axios.get(`http://localhost:10300/api/v4/tagmgr/get_list/0`).then((res2) => {
    //     return res.json({res: JSON.parse(res2.data.result)})
    // })

    let opts = {
        method: 'get',
        url: 'http://localhost:10300/api/v4/tagmgr/get_list/0'
    };
   
    const res2 = await Utils.promiseReq(opts)
    res.json(JSON.parse(res2))
});

module.exports = router;




