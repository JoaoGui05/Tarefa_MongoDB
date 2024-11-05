const mongoose = require('mongoose');

const DisciplinaSchema = new mongoose.Schema({
    nome: String,
    cargaHoraria: Number,
    sala: String
});

module.exports = mongoose.model('Disciplina', DisciplinaSchema);
