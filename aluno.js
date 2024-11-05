const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    ra: String,
    fk_idTurma: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Disciplina' // Referência à coleção Disciplina
    }
});

module.exports = mongoose.model('Aluno', AlunoSchema);
