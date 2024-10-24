const express = require('express');
const router = express.Router();
const Location = require('../models/Location');






router.post('/locations', async (req, res) =>{
    try{
        const location = await Location.create({
            nome: req.body.nome,
            cep: req.body.cep,
            logradouro: req.body.logradouro,
            numero: req.body.numero,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado
        });
        res.status(201).json(location);
    }catch(err){
        res.status(400).json({ error: err.message });
    }
});


router.get('/locations', async (req, res) => {
    try {
        const locations = await Location.findAll();
        res.json(locations);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
);

module.exports = router;