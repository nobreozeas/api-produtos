const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
/**
 * @swagger
 * /categories/add:
 *   post:
 *     summary: Cria uma nova categoria
 *     tags: [Categorias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       400:
 *         description: Erro ao criar a categoria
 */
router.post('/categories/add', async (req, res) =>{
    try{
        console.log(req.body);
        const category = await Category.create({ nome: req.body.nome });
        res.status(201).json(category);
    }catch(err){
        console.log(err);
        return
        res.status(400).json({ error: err.message });
    }
});


router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;