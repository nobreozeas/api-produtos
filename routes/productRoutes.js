const express = require('express');
const multer = require('multer');
const router = express.Router();
const { Op } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('../models/Product');
const Category = require('../models/Category');
const Location = require('../models/Location');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const upload = multer({ storage });

router.get('/products', async (req, res) => {
    try {
        const products = await Product.findAll({
            include: [
                { model: Category, attributes: ['nome'] }, // Inclui apenas o campo 'nome' da categoria
                { model: Location, attributes: ['nome'] }  // Inclui apenas o campo 'nome' do local
            ]
        });
        res.json(products);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post('/products', upload.single('image'), async (req, res) => {
    try {

        

        const product = await Product.create({
            nome: req.body.nome,
            preco: req.body.preco,
            descricao: req.body.descricao,
            image: req.file.path,
            usuario: req.body.usuario,
            CategoryId: req.body.categoriaId,
            LocationId: req.body.localId
        });
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/products/:search', async (req, res) => {
    try {
        const products = await Product.findAll({
            where: {
                [Op.or]: [
                    { nome: { [Op.like]: `%${req.params.search}%` } },
                    { descricao: { [Op.like]: `%${req.params.search}%` } }
                ]
                
            },
            include: [
                { model: Category, attributes: ['nome'] },
                { model: Location, attributes: ['nome'] }
            ]
        });
        res.json(products);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;