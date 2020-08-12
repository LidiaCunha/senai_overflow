const { Sequelize, DataTypes, Model } = require('sequelize');

class Comentario extends Model {

    static init(sequelize) {
        super.init(
            {
                titulo: DataTypes.STRING,
                descricao: DataTypes.TEXT,
            },
            {
                sequelize,
            }
        );
        
    }

    static associate(models) {
        this.belongsTo(models.Postagem)
        this.belongsTo(models.Aluno)
    }
}

module.exports = Comentario;