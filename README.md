# Projeto Talker Manager

O **Talker Manager** é uma API desenvolvida para gerenciar palestrantes. Ela permite a realização de operações CRUD (Criar, Ler, Atualizar e Deletar) em dados de palestrantes. A API foi desenvolvida utilizando **Node.js** com o framework **Express.js** e faz uso de **JWT (JSON Web Token)** para autenticação.

A aplicação foi construída com o objetivo de fornecer uma forma simples de gerenciar informações sobre palestrantes, como nome, idade e avaliações de palestras. Além disso, a API inclui várias validações para garantir que os dados inseridos estejam no formato correto.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de execução para JavaScript no lado do servidor.
- **Express.js**: Framework para a criação de APIs e servidores web.
- **JWT (JSON Web Token)**: Tecnologia usada para autenticação e autorização de usuários.
- **Middleware**: Validações customizadas para garantir que os dados estejam no formato adequado (e-mail, senha, dados dos palestrantes, etc.).
- **Sistema de Arquivos (FS)**: A aplicação utiliza arquivos JSON para armazenar os dados dos palestrantes.

## Rotas
 
- POST `/login`
- GET `/talker/search`
- GET `/talker`
- GET `/talker/:id`
- POST `/talker`
- PUT `/talker/:id`
- DELETE `/talker/:id`

## Autenticação

Este projeto utiliza autenticação baseada em JWT (JSON Web Token). A autenticação é necessária para acessar algumas rotas que manipulam os dados dos palestrantes. O processo de autenticação ocorre da seguinte forma:

### 1. Sobre a rota POST `/login`:

Para obter um token de acesso, faça uma requisição `POST` para a rota `/login` passando os seguintes dados no corpo da requisição:

    - Para obter um token de acesso, faça uma requisição `POST` para a rota `/login` passando os seguintes dados no corpo da requisição:`email` e `password` no corpo da requisição
    - caso os dados estejam incorretos, deve retornar status 403
    - caso os dados estejam corretos, deve retornar um campo `token` contendo um JWT gerado
    - O token gerado é necessário para acessar as rotas protegidas, como as de criação, alteração e exclusão de palestrantes.

<details>
  <summary>🔍 Formato/exemplo de requisição e resposta</summary><br />

Exemplo de requisição na rota POST `/login` (suppondo que os dados estejam corretos):

```json
{
  "email": "usuario@exemplo.com",
  "password": "senhasecreta"
}
```

Exemplo de resposta:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhZ3JpeCIsInN1YiI6Im1ycm9ib3QiLCJleHAiOjE2ODk5ODY2NTN9.lyha4rMcMhFd_ij-farGCXuJy-1Tun1IpJd5Ot6z_5w"
}
```

</details>

### 2. Limita acesso à rota POST /talker, PUT `/talker/:id` e DELETE `/talker/:id`

<details>

Retorna status 401 caso a pessoa não tenha inserido o token no header/authorization. Do contrário, a rota deve retornar status 200.

Exemplo: 
Authorization: seu_token_aqui

</details>

## Como Executar

<details>
 <summary><strong> Passo a passo</strong></summary>

  Pré-requisitos: Java 17
  
1. Clone o repositório

- Use o comando: `git clone git@github.com:LiviaBoechat/Projeto_TalkerManager.git` 

- Entre na pasta do repositório que você acabou de clonar:
    - `cd Projeto_TalkerManager`

2. Instale as dependências

- `npm install`

3. Rode a aplicação, iniciando o servidor

- `npm start`

</details>
