const Router = require('express')
const router = new Router()
const articleController = require('../controller/article.controller')

router.post('/article', articleController.createArticle)
router.get('/article/:id', articleController.getOneArticle)
router.get('/article', articleController.getArticles)
router.put('/article/:id', articleController.updateArticle)
router.delete('/article/:id', articleController.deleteArticle)


module.exports = router