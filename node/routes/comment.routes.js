const Router = require('express')
const router = new Router()
const commentController = require('../controller/comment.controller')

router.post('/article/:id/comment', commentController.createComment)
router.get('/article/:id/comment/:commentId', commentController.getOneComment)
router.get('/article/:id/comment', commentController.getComments)
router.put('/article/:id/comment/:commentId', commentController.updateComment)
router.delete('/article/:id/comment/:commentId', commentController.deleteComment)


module.exports = router