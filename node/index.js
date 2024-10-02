const express = require('express')
const cors = require('cors');

const articleRouter = require('./routes/article.routes')
const commentRouter = require('./routes/comment.routes')
const analyticRouter = require('./routes/analytic.routes')

const PORT = process.env.PORT || 8080


const app = express()
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello!!')
})

app.use('/api', articleRouter)
app.use('/api', commentRouter)
app.use('/api', analyticRouter) //http://localhost:8080/api/analytic/comments?dateFrom=2024-09-26&dateTo=2024-09-30

app.listen(PORT, () => console.log(`server start on port ${PORT}`));

