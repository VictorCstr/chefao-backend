<p align="center">
  <img src="https://github.com/VictorCstr/NextLevel-Ecommerce/blob/main/logo-gama-academy.png" width="50%">
</p>

<p align="center">
 <a href="#computer-o-projeto">Sobre</a> •
 <a href="#rocket-tecnologias">Objetivo</a> •  
 <a href="#mag_right-para-rodar-o-projeto">Como rodar</a> • 
 <a href="#thought_balloon-requisições">Todas as Requisições</a> 
</p>

<h1 align="center">Desafio Chefão - Grupo 10</h1> <br><br>
<img src="https://github.com/VictorCstr/chefao-backend/blob/main/exemplo.jpg" height="800">

## :computer: O projeto 
- O nosso desafio foi criar um produto do zero. Vamos criar uma apresentação de portfólio navegável e interativo de um novo empreendimento.
- Este é o repositório da parte back-end do nosso produto.
- Se trata de uma REST API que retorna as categorias, produtos e imagens para montar a nossa página.

## :rocket: Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:

- Javascript
- Node
- Express
- Sequelize
- MySQL
- Dependências: Slugify, CORS
- Padrão MVC
- Heroku para deploy

## :mag_right: Para rodar o projeto:
```bash
# Pré requisitos
- Git e Node instalados na máquina

# Faça o clone do repositório
$ git clone https://github.com/VictorCstr/chefao-backend.git

# Acesse a pasta do projeto no terminal

# Faça a instalação  das dependências
$ npm install

# Execute a aplicação
$ npm start

```

### :thought_balloon: Requisições

## Buscar Imagens

**Endpoint:** `/images/`
 ## Lista:
 TODOS EM FORMATO .SVG
- Milshake, milkshake-tropical, milkshake-shakelicia, milkshake-rosa, milkshake-chocoshake.svg
- Matinais, matinal-acordei, matinal-guaracy, matinal-itu, matinal-matine.svg
- Detox, detox-verde, detox-laranja, detox-fresh.svg
- Cha-gelado, cha-princesa, cha-mate, cha-fresh
- Batidos, batido-yasai, batido-verdana, batido-praia-vermelha, batido-paraty, batido-laranjal, batido-gringa, batido-citrus, batido-boto-rosa.svg


## Retornando as categorias
**Endpoint:** `/categories`

**Method:** `GET`

**Response Body:**
```json
{
  "id": 5,
  "nome": "Batidos",
  "slug": "Batidos",
  "descricao": "Pode misturar! Mistura na batida os melhores sabores da vida.",
  "createdAt": "2022-03-24T00:47:44.000Z",
  "updatedAt": "2022-03-24T00:47:44.000Z"
},
```
## Retornando itens por categoria
**Endpoint:** `/categories/:slug`

**Method:** `GET`

**Response Body:**
```json
{
    "id": 5,
    "nome": "Batidos",
    "slug": "Batidos",
    "descricao": "Pode misturar! Mistura na batida os melhores sabores da vida.",
    "createdAt": "2022-03-24T00:47:44.000Z",
    "updatedAt": "2022-03-24T00:47:44.000Z",
    "Sucos": [
      {
        "id": 20,
        "nome": "Verdana",
        "slug": "Verdana",
        "descricao": "Uva, Limão, Hortelã, Graviola",
        "valor": 15.99,
        "linkFoto": "Lorem-ipsum.jpg",
        "id_categoria": 5,
        "createdAt": "2022-03-24T01:21:59.000Z",
        "updatedAt": "2022-03-24T01:21:59.000Z"
      },
 }
```

## Criar uma categoria

**Endpoint:** `/categories`

**Method:** `POST`

**Request Body:**

```json
{
    "nome": "Nova Categoria",
    "descricao": "Descrição da categoria",
}
```

**Response Body:**

```json
{
  "id": 10,
  "nome": "Nova Categoria",
  "slug": "nova-categoria",
  "descricao": "Descrição da categoria",
  "createdAt": "2022-03-24T00:47:44.000Z",
  "updatedAt": "2022-03-24T00:47:44.000Z"
}
```

## Retornar Sucos pelo nome
**Endpoint:** `/juice`

**Method:** `POST`

**Request Body:**

```json
{
    "busca": "Fresh Hibisco"
}
```

**Response Body:**
```json
{
    "id": 7,
    "nome": "Fresh Hibisco",
    "slug": "Fresh-Hibisco",
    "descricao": "Chá preto, hibisco e limão",
    "valor": 15.99,
    "linkFoto": "Lorem-ipsum.jpg",
    "id_categoria": 9,
    "createdAt": "2022-03-24T01:13:20.000Z",
    "updatedAt": "2022-03-24T01:13:20.000Z"
},
```
## Retornando todos os Sucos
**Endpoint:** `/juices`

**Method:** `GET`

**Response Body:**
```json
{
"id": 6,
"nome": "Mate com limão",
"slug": "Mate-com-limao",
"descricao": "Chá mate e limão",
"valor": 15.99,
"linkFoto": "Lorem-ipsum.jpg",
"id_categoria": 9,
"createdAt": "2022-03-24T01:12:34.000Z",
"updatedAt": "2022-03-24T01:12:34.000Z"
},
{
"id": 7,
"nome": "Fresh Hibisco",
"slug": "Fresh-Hibisco",
"descricao": "Chá preto, hibisco e limão",
"valor": 15.99,
"linkFoto": "Lorem-ipsum.jpg",
"id_categoria": 9,
"createdAt": "2022-03-24T01:13:20.000Z",
"updatedAt": "2022-03-24T01:13:20.000Z"
},
```

## Retornar suco especifico pelo slug

**Endpoint:** `/juices/:slug`

**Method:** `get`

**Response Body:**

```json
{
    "id": 8,
    "nome": "Princesa Peach",
    "slug": "Princesa-Peach",
    "descricao": "Chá preto, laranja, limão e pêssego",
    "valor": 15.99,
    "linkFoto": "Lorem-ipsum.jpg",
    "id_categoria": 9,
    "createdAt": "2022-03-24T01:13:37.000Z",
    "updatedAt": "2022-03-24T01:13:37.000Z"
},
```

## Criar Suco novo

**Endpoint:** `/juices`

**Method:** `POST`

**Request Body:**

```json
{
    "nome": "Nova Suco",
    "descricao": "Descrição do suco",
    "valor": 30,
    "linkFoto": "loremipsum.svg",
    "id_categoria": 9
}
```

**Response Body:**

```json
{
    "id": 8,
    "nome": "Novo Suco",
    "slug": "novo-suco",
    "descricao": "Descrição do suco",
    "valor": 30,
    "linkFoto": "loremipsum.svg",
    "id_categoria": 9,
    "createdAt": "2022-03-24T01:13:37.000Z",
    "updatedAt": "2022-03-24T01:13:37.000Z"
},
```
