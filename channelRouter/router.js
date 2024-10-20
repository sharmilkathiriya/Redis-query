let router = require('express').Router();
var Controller = require('../controller/TestController');

router.route('/redis_channel_doc').get(Controller.TestContorller)

module.exports = router;    