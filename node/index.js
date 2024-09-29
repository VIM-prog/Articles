const express = require('express')
const articleRouter = require('./routes/article.routes')
const commentRouter = require('./routes/comment.routes')

const PORT = process.env.PORT || 8080

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello!!')
})

app.use('/api', articleRouter)
app.use('/api', commentRouter)

app.listen(PORT, () => console.log(`server start on port ${PORT}`));