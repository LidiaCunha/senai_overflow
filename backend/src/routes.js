//esse arquivo tem como responsabilidade, cadastrar as rotas de aplicação

const express = require("express");

//criando o roteirizador
const routes = express.Router();

const alunoController = require("./controllers/aluno");
const postagemController = require("./controllers/postagem");
const comentarioController = require("./controllers/comentario");

//rotas de usuário
routes.get("/alunos", alunoController.listar);
routes.get("/alunos/:id", alunoController.buscarPorId);
routes.post("/alunos", alunoController.store);

//rotas de postagem
routes.post("/postagens", postagemController.store);
routes.delete("/postagens/:id", postagemController.delete);

//rotas de comentario
routes.post("/postagens/:id/comentarios", comentarioController.store);

module.exports = routes;

