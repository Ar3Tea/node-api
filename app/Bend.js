const express = require('express')
const request = require('request')
const URL = require('url')
const app = express()
const port = 8889
const gitInfo = require('./Git.js');
const getRandomNumber = require('./Random.js');

app.get('/', (req, res) => res.send("<br>" + "<br>" + "<br>" + "<br>" + "<br>" +
"<br>" + "<br>" + "<br>" +"<br>" +"<br>" +"<br>" +"<br>" +"<br>" +"<br>" +
"&nbsp &nbsp &nbsp &nbsp &nbsp \
&nbsp &nbsp &nbsp &nbsp &nbsp \
&nbsp &nbsp &nbsp &nbsp &nbsp \
&nbsp &nbsp &nbsp &nbsp &nbsp \
&nbsp &nbsp &nbsp &nbsp &nbsp \
&nbsp &nbsp &nbsp &nbsp &nbsp \
&nbsp &nbsp &nbsp &nbsp &nbsp \
&nbsp &nbsp &nbsp &nbsp &nbsp \
&nbsp &nbsp &nbsp &nbsp &nbsp \
&nbsp &nbsp &nbsp &nbsp &nbsp \
&nbsp &nbsp &nbsp &nbsp &nbsp \
&nbsp &nbsp &nbsp &nbsp &nbsp \
&nbsp &nbsp &nbsp &nbsp &nbsp \
&nbsp &nbsp &nbsp &nbsp &nbsp \
&nbsp &nbsp &nbsp &nbsp &nbsp \
&nbsp &nbsp &nbsp &nbsp &nbsp \
Hello Friend! \
Welcome to my Node/Express API. \
There's nothing important here, just a CI/CD playground."))

app.get('/health', (req, res) => res.json({ 
    status: 'OK',
    commit: gitInfo.Commit,
    date: gitInfo.Dates,
    author: gitInfo.Author,
    commitMessage: gitInfo.Message
}))

const url = 'https://xkcd.com/#' ;

app.get('/comics', (req, res) => request
.get(url)
.on('error', function(err) {
  console.error(err)
})
.pipe(res)
)

app.listen(port, () => console.log(`Simple Node/Express app listening on port ${port}!`))

