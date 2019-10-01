const express = require('express')
const app = express()
const port = 3000
const Git = require("nodegit");
const gitInfo = require('../app/Git.js');

app.get('/health', (req, res) => res.json({ 
    status: 'OK',
    commit: gitInfo.Commit,
    date: gitInfo.Dates,
    author: gitInfo.Author,
    commitMessage: gitInfo.Message
}))

app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Simple Node/Express app listening on port ${port}!`))

// testing systemd servic