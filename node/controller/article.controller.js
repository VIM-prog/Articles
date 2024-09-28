const db = require('../db')
class articleController {
    async createArticle(req, res) {
        const {title, content, createdAt, updatedAt} = req.body
        const newArticle = await db.query('INSERT INTO articles (title, content, "createdAt", "updatedAt") VALUES ($1, $2, $3, $4) RETURNING *', [title, content,createdAt,updatedAt])
        res.json(newArticle.rows[0])
    }

    async getArticles(req, res) {
        const articles = await db.query('SELECT * FROM articles')
        res.json(articles.rows)
    }

    async getOneArticle(req, res) {
        const id = req.params.id
        const article = await db.query('SELECT * FROM articles WHERE id = $1', [id])
        res.json(article.rows[0])
    }

    async updateArticle(req, res) {
        const {id, title, content} = req.body 
        const article = await db.query('UPDATE articles set title = $1, content = $2 WHERE id = $3 RETURNING *', [title, content, id])
        res.json(article.rows[0])
    }

    async deleteArticle(req,res) {
        const id = req.params.id
        const article = await db.query('DELETE FROM articles WHERE id = $1', [id])
        res.json(article.rows[0])
    }
}

module.exports = new articleController()