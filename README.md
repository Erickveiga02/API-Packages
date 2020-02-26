## API-PACOTES
### Introdução:

Foi criado uma API utilizando Nodejs para inserir pacotes. Utilizamos um proxy reverso com nginx e mysql como nosso banco de dados.
Montamos toda a infraestrutura utilizando docker.

### Infra:
<ol>
  <li>Nodejs - Porta: 8888</li>
  <li>Nginx - Porta: 80</li>
  <li>Mysql - Porta: 3306</li>
</ol>

### Diagrama da API
<img src=”diagrama.png”>




### Start da API!
Para utilizarmos a nossa API é necessário
<ol>
  <li>Docker</li>
  <li>Docker-compose</li>
  <li>Postman</li>
</ol>

Tendo os requisistos já instalados na sua máquina, vamos iniciar nossos containers.
Vá na raiz do arquivo onde encontra-se o arquivo "docker-compose.yml" e utilize:

docker-compose up -d --build

Com esse comando vamos iniciar nossos containers.
Para parar basta usar:

docker-compose stop

### O postman!
