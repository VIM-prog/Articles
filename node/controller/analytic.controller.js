const db = require('../db')
class analyticController {
    async getCommentsByPeriod(req, res) {
        const { dateFrom, dateTo } = req.query;
        const fromDate = new Date(Date.parse(dateFrom));
        const toDate = new Date(Date.parse(dateTo));
        const comments = await db.query('SELECT * FROM comments WHERE "createdAt" BETWEEN $1 AND $2 ORDER BY "idArticle"',[fromDate, toDate]);
        res.json(comments.rows);
    } 
}
module.exports = new analyticController()