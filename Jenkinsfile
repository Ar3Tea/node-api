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

    stage('Moving') {
      steps {
        sh 'cd node-api'
      }
    }
     
    stage('Start') {
      steps {
        echo "starting.."
        sh 'node Bend.js'
      }
    }      
  }
}