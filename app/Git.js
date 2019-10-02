let Git = require("nodegit");

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
 
    // Create a counter to only show up to 3 entries.
    let count = 0;
 
    // Listen for commit events from the history.
    history.on("commit", function(commit) {
      // Disregard commits past 3.
      if (++count >= 3) {
        return;
      }
 
      // Show the commit sha.
      exports.Commit = commit.sha();
 
      // Store the author object.
      let author = commit.author();
 
      // Display author information.
      exports.Author = author.name() + " <" + author.email() + ">";
 
      // Show the commit date.
      exports.Dates = commit.date();
 
      // Give some space and show the message.
      exports.Message = commit.message();
    });
 
    // Start emitting events.
    history.start();
  });