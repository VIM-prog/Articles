const db = require('../db')
class commentController {
    async createComment(req, res) {
        
      }

    async getComments(req, res) {
        const articleId = req.params.id;
        const comments = await db.query('SELECT * FROM comments WHERE "idArticle" = $1 ORDER BY "createdAt" DESC', [articleId]);
        res.json(comments.rows);
    }

    async getOneComment(req, res) {
        
    }

    async updateComment(req, res) {
        
    }

    async deleteComment(req,res) {
        
    }
}

module.exports = new commentController()