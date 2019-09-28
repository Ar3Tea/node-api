const express = require('express')
const app = express()
const port = 3001
const Git = require("nodegit");
 
// Open the repository directory.
Git.Repository.open("tmp")
  // Open the master branch.
  .then(function(repo) {
    return repo.getMasterCommit();
  })
  // Display information about commits on master.
  .then(function(firstCommitOnMaster) {
    // Create a new history event emitter.
    let history = firstCommitOnMaster.history();
 
    // Create a counter to only show up to 9 entries.
    let count = 0;
 
    // Listen for commit events from the history.
    history.on("commit", function(commit) {
      // Disregard commits past 3.
      if (++count >= 3) {
        return;
      }

      let author = commit.author();


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/health', (req, res) => res.json({ 
    status: 'OK',
    commit: commit.sha(),
    date: "Date:\t" + commit.date(),
    author: author.name() + " <" + author.email() + ">",
    commitMessage: commit.message()
}))

});
 
// Start emitting events.
history.start();
});


app.listen(port, () => console.log(`Simple Node/Express app listening on port ${port}!`))

// testing systemd service