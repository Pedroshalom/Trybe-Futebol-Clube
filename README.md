# Trybe Futebol Clube (TFC)

Esse projeto tem como finalidade juntar todos os conhecimentos adquiridos até o momento! A proposta é a criação de uma API que deve ser consumida por um front-end já disponibilizado

## <h1>Tecnologias</h1>
Esse projeto foi desenvolvido com as seguintes técnologias:

<h4>- Front-End: React, Axios.</h4>
<h4>- Back-end: Javascript, Typescript, Node.js, POO, SOLID, Docker, Sequelize</h4>
<h4>- Testes: Mocha, chai, sinon, jest.</h4>

<h2>Rodando o Projeto (Docker 🐋)</h2>

1. Clone o repositório em sua máquina local.

2. Certifique-se de ter o docker-compose instalado.

3. Execute o comando `npm run compose:up` para iniciar a aplicação ou acesse a pasta `app` e rode com o comando `docker-compose up -d --build`.

4. Acesse o endereço http://localhost:3000 para acessar o site e http://localhost:3001 para acessar a API.

⚠️ **Atenção** ⚠️ Caso opte por utilizar o Docker, TODOS os comandos disponíveis no package.json (npm start, npm test, npm run dev, ...) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando docker exec citado acima.

⚠️ **Atenção** ⚠️ O git dentro do container não vem configurado com suas credenciais. Faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

⚠️ **Atenção** ⚠️ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

⚠️ **Atenção** ⚠️ Caso você esteja usando macOS e ao executar o docker-compose up -d se depare com o seguinte erro:

```typescript
The Compose file './docker-compose.yml' is invalid because:
Unsupported config option for services.db: 'platform'
Unsupported config option for services.node: 'platform'
```

