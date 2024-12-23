# Projeto Talker Manager

O **Talker Manager** é uma API desenvolvida para gerenciar palestrantes. Ela permite a realização de operações CRUD (Criar, Ler, Atualizar e Deletar) em dados de palestrantes. A API foi desenvolvida utilizando **Node.js** com o framework **Express.js** e faz uso de **JWT (JSON Web Token)** para autenticação.

A aplicação foi construída com o objetivo de fornecer uma forma simples de gerenciar informações sobre palestrantes, como nome, idade e avaliações de palestras. Além disso, a API inclui várias validações para garantir que os dados inseridos estejam no formato correto.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de execução para JavaScript no lado do servidor.
- **Express.js**: Framework para a criação de APIs e servidores web.
- **JWT (JSON Web Token)**: Tecnologia usada para autenticação e autorização de usuários.
- **Middleware**: Validações customizadas para garantir que os dados estejam no formato adequado (e-mail, senha, dados dos palestrantes, etc.).
- **Sistema de Arquivos (FS)**: A aplicação utiliza arquivos JSON para armazenar os dados dos palestrantes.


## Especificações do projeto

<details>
<summary><strong>Testes</strong></summary>
  
- Os testes deste projeto são, de maneira geral, testes de integração. Cada teste fará diversas chamadas à API e validará a resposta e o comportamento da aplicação, mas sem restringir implementações específicas de classes e métodos.
- Os testes do projeto utilizam um banco "mockado" em memória do tipo H2.

</details>

<details>
<summary>Descrição do banco de dados</summary><br>

![Modelo de tabelas](images/agrix-tabelas-fase-b.png)

Nesse modelos, temos as seguintes tabelas:
- `farm`: representa uma fazenda
- `crop`: representa uma plantação, e está em relacionamento `n:1` ("muitos para um") com a tabela `farm`
- `fertilizer`: esta nova tabela representa um fertilizante, e está em um relacionamento `n:n` ("muitos para muitos") com a tabela `crop`. Esse relacionamento é realizado através da tabela `crop_fertilizer`.

</details>


## Rotas

 
- POST `/login`
- GET `/talker/search`
- GET `/talker`
- GET `/talker/:id`
- POST `/talker`
- PUT `/talker/:id`
- DELETE `/talker/:id`


### 1. Sobre a rota POST `/login`:

    - deve receber o `email` e `password` no corpo da requisição
    - caso os dados estejam incorretos, deve retornar status 403
    - caso os dados estejam corretos, deve retornar um campo `token` contendo um JWT gerado

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

### 2. Limita acesso à rota POST /talker

<details>
  <summary>Limitar acesso à rota POST /talker para pessoa autenticada com role correto</summary><br />

Retorna status 401 caso a pessoa não tenha inserido o token no header/auth. Do contrário, a rota deve retornar status 200.

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
