const nodegit = require("nodegit");
const path = require("path");

let repoDir = "../tmp";

let repository;

// Open a repository that needs to be fetched and fast-forwarded
nodegit.Repository.open(path.resolve(__dirname, repoDir))
  .then(function(repo) {
    repository = repo;

    return repository.fetchAll();
  })
  // Now that we're finished fetching, go ahead and merge our local branch
  // with the new one
  .then(function() {
    return repository.mergeBranches("master", "origin/master");
  })
  .done(function() {
    console.log("Done!");
  });