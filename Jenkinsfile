pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/gustavoapolinario/node-todo-frontend'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Move') {
      steps {
        dir('/var/lib/jenkins/workspace/myFirstPipeline/node-api') {
          sh 'node Bend.js'
        }
      }
    }
}