const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/health', (req, res) => res.json({ 
    status: 'OK',
    version: 'commit here',
    commitMessage: 'message maybe here'
}))

app.listen(port, () => console.log(`Simple Node/Express app listening on port ${port}!`))