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
<img src=Diagrama.PNG>




### Start da API!
Para utilizarmos a nossa API é necessário:
<ol>
  <li>Docker</li>
  <li>Docker-compose</li>
  <li>Postman</li>
</ol>

Tendo os requisistos já instalados na sua máquina, vamos iniciar nossos containers.
Vá na raiz do arquivo onde encontra-se o arquivo "docker-compose.yml" e utilize:

#### docker-compose up -d --build

Com esse comando vamos iniciar nossos containers.
Para parar basta usar:

#### docker-compose stop

### O postman!

Postman é um software bem legal para testarmos nossa API,vamos dar uma olhada nos passos a seguir de como é fácil fazer o uso dessa ferramenta.

#### Meu primeiro GET nos pacotes!!!!
<img src=get.PNG>
Basta inserir o endereço IP do nosso NGINX/packages para dar um GET!

#### Inserindo um novo pacote!
<img src=post.PNG>
Para inserir um pacote basta deixar o Postman dessa maneira, em "Nome do pacote" Insira o nome que deseja armazenar e
Coloque uma descrição pra ele

#### Deletando um pacote
<img src=delete.PNG>
Para deletar basta escolher o metodo "delete" e inserir o id do seu pacote, assim como está na imagem.


### Descrição da Versão:
<ul>
  <li>V1.0 Essa primeira versão apenas temos os metodos: POST, GET e DELETE. Não conseguimos fazer update de pacotes ainda. </li>
  <li>V1.1 A versão 1.0 utilizava o Restify@7.0 que possui uma vunerabilidade no csv-parse, recebiamos um warning toda vez que utilizavamos o "npm install" mas resolvemos isso utilizando a versão Restify@8.5.1 </li>
</ul>

