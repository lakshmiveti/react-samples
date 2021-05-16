pipeline {
    agent any
    environment {
            CI = 'true'
        }
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
                    steps {
                       // sh "chmod +x -R ${env.WORKSPACE}"
                        bat './jenkins/scripts/test.bat'
                    }
                }
                stage('Deliver') {
                            steps {
                                //sh "chmod +x -R ${env.WORKSPACE}"
                                bat './jenkins/scripts/deliver.bat'
                                input message: 'Finished using the app? (Click "Proceed" to continue)'
                                bat './jenkins/scripts/kill.bat'
                            }
                        }

    }
}