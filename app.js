const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const alunoController = require('./controllers/alunoController');
const disciplinaController = require('./controllers/disciplinaController');

app.use('/alunos', alunoController);
app.use('/disciplinas', disciplinaController);

mongoose.connect('mongodb://127.0.0.1:27017/aula10_tarefa', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000 e conectado ao MongoDB');
        });
    })
    .catch(err => console.log(err));
