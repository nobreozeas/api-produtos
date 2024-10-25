const express = require('express');
const multer = require('multer');
const router = express.Router();
const Product = require('../models/Product');
const Category = require('../models/Category');

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
        const products = await Product.findAll();
        res.json(products);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

);

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

module.exports = router;