pipeline{
    agent {
    node {
        label 'node1'
        customWorkspace '/tmp'
        }
     
    stages {
        stage('clone') {
            steps {
                git url: 'https://github.com/Erickveiga02/hurb-teste.git'
            }
        }
        stage('build') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    
    }
}
