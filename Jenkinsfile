node1{
    
    stage('Clone sources') {
        git url: 'https://github.com/Erickveiga02/hurb-teste.git'
    }
    
    stage('build projetc') {
       sh 'docker-compose up -d '
    }
}
