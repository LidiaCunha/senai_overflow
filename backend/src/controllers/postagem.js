const Postagem = require("../models/Postagem");
const { store } = require("./aluno");

module.exports = {
    async  store(req, res){
        const token = req.headers.authorization;

        const [Bearer, created_aluno_id] = token.split("");

        // return res.send(created_aluno_id);

        const {titulo, descricao, imagem, gists} = req.body;

        let post = await Postagem.create({
            titulo,
            descricao,
            imagem,
            gists
        });

        res.send(201).send(post);
    },

    async delete(req, res){
        const token = req.headers.authorization;

        const [Bearer, created_aluno_id] = token.split("");

        const id = req.params.id;
        const postagem = await Postagem.findByPk(id);

        if(!postagem){
            return res.status(404).send({erro: "Aluno não cadastrado!"});
        } 

        if(postagem.created_aluno_id != created_aluno_id){erro
            return res.status(401).send("Você não tem permissão para excluir essas postagens");
        }
        
        await postagem.destroy();

        res.status(204).send();
    }
};

