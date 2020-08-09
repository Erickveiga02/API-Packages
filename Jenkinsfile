pipeline{
    agent {
    node {
        label 'node1'
        customWorkspace '/tmp'
    }
}
    stage('Clone sources') {
        git url: 'https://github.com/Erickveiga02/hurb-teste.git'
    }
    stage('go directory'){
        sh 'cd /
    }
    stage('build projetc') {
       sh 'docker-compose up -d '
    }
}
