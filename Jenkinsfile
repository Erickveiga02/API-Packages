node {
    stage('Clone sources') {
        git url: 'https://github.com/Erickveiga02/hurb-teste.git'
    }

    stage('build projetc') {
        docker-compose up -d 
    }
}
