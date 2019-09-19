const express = require('express')
const nock = require('nock')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

const scope = nock('/')
  .get('/')
  .reply(200, "Hello World!")

app.listen(port, () => console.log(`Simple Node/Express app listening on port ${port}!`))