const Router = require('express')
const router = new Router()
const analyticController = require('../controller/analytic.controller')

router.get('/analytic/comments', analyticController.getCommentsByPeriod)

module.exports = router