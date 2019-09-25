pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/Ar3Tea/node-api'
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
}