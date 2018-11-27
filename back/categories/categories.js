const express = require('express');
const router = express.Router();
const category_q = require('./categories_query');
const db = require('../config/db');

router.get('/ver-categorias', async function  (req, res) {
    // console.log("hola estas en ver-categorias");
    await db.connectBD();
    let resultadoDB = await category_q.getCategories();
    // console.log(resultadoDB);
    res.send(resultadoDB);
})
router.post('/agregar-categoria',async function (req, res) {
    console.log('client');
    let categoria = req.body;
    // console.log(categoria);
    await db.connectBD();
    let result = await category_q.addCategories(categoria);
    // res.send('hola estas en listar-ventaes');
    console.log("hola estas en crear-categoria");
    res.send(result);
})
 

module.exports = router;