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

    stage('Move to start') {
      steps {
        dir('/var/lib/jenkins/workspace/myFirstPipeline/node-api') {
          echo "moving.."
          echo "starting.."
          sh 'node Bend.js'
        }
      }
    }
