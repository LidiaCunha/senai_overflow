const Postagem = require("../models/Postagem");
const { store } = require("./aluno");

module.exports = {
    async  store(req, res){
        const token = req.headers.authorization;

        const [Bearer, created_aluno_id] = token.split(" ");

        const {titulo, descricao, imagem, gists} = req.body;
        
        try {
            
            const aluno = Aluno.findByPk(created_aluno_id);

            if (!aluno) {
                res.status(404).send("Aluno não encontrado!");
            }

            let post = await aluno.createPostagem({
                titulo,
                descricao,
                imagem,
                gists,
                created_aluno_id
            });

            res.status(201).send(post);
            
        } catch (error) {
            return res
            .status(500)
            .send({
                error: "Não foi possível adicionar a postagem, tente novamento mais tarde."
            });
        }
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

