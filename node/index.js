const express = require('express')

const PORT = process.env.PORT || 8080

const app = express()

app.get('/', (req, res) => {
    res.send('Hell!!')
})

app.listen(PORT, () => console.log(`server start on port ${PORT}`));