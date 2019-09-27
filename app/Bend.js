const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/health', (req, res) => res.send('OK'))

app.listen(port, () => console.log(`Simple Node/Express app listening on port ${port}!`))

//Corey-s PR