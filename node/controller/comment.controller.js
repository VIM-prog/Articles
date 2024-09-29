const db = require('../db')
class commentController {
    async createComment(req, res) {
      const { content } = req.body;
      const idArticle = req.params.id
        const newComment = await db.query('INSERT INTO comments ("idArticle", content, "createdAt", "updatedAt") VALUES ($1, $2, NOW(), NOW()) RETURNING *',[idArticle, content]);
        res.json(newComment.rows[0]);
    }


    async getComments(req, res) {
      const idArticle = req.params.id
      const comments = await db.query('SELECT * FROM comments WHERE "idArticle" = $1 ORDER BY "createdAt" DESC', [idArticle]);
      res.json(comments.rows);
  }

    async getOneComment(req, res) {
      const id = req.params.commentId
      const idArticle = req.params.id
      const comment = await db.query('SELECT * FROM comments WHERE "idArticle" = $1 AND id = $2', [idArticle,id])
      res.json(comment.rows[0])
    }

    async updateComment(req, res) {
      const {content} = req.body 
      const id = req.params.commentId
      const idArticle = req.params.id
      const comment = await db.query('UPDATE comments set content = $1, "updatedAt" = NOW() WHERE "idArticle" = $2 AND id = $3 RETURNING *', [content, idArticle, id])
      res.json(comment.rows[0])
    }

    async deleteComment(req,res) {
      const id = req.params.commentId
      const idArticle = req.params.id
      const comment = await db.query('DELETE FROM comments WHERE "idArticle" = $1 AND id = $2', [idArticle,id])
      res.json(comment.rows[0])
    }
}

module.exports = new commentController()