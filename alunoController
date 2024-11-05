const express = require('express');
const Aluno = require('../models/aluno');
const Disciplina = require('../models/disciplina');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const alunos = await Aluno.find().populate('fk_idTurma');
        res.status(200).json(alunos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const aluno = await Aluno.findById(req.params.id).populate('fk_idTurma');
        if (!aluno) return res.status(404).json({ message: 'Aluno não encontrado' });
        res.status(200).json(aluno);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    const { nome, idade, ra, fk_idTurma } = req.body;
    const aluno = new Aluno({ nome, idade, ra, fk_idTurma });

    try {
        await aluno.save();
        res.status(201).json(aluno);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!aluno) return res.status(404).json({ message: 'Aluno não encontrado' });
        res.status(200).json(aluno);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const aluno = await Aluno.findByIdAndDelete(req.params.id);
        if (!aluno) return res.status(404).json({ message: 'Aluno não encontrado' });
        res.status(200).json({ message: 'Aluno deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
