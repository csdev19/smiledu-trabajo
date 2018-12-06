const express = require('express');
const router = express.Router();
const product_q = require('./product_query');
const db = require('../config/db');


router.get('/ver-productos', async function  (req, res) {
    console.log("hola estas en ver-productos");
    await db.connectBD();
    let resultadoDB = await product_q.getProducts();
    // console.log(resultadoDB);
    res.send(resultadoDB);
})

router.get('/ver-productos-tabla', async function  (req, res) {
    // console.log("hola estas en ver-productos");
    await db.connectBD();
    let resultadoDB = await product_q.getProductsTabla();
    // console.log(resultadoDB);
    res.send(resultadoDB);
})

router.post('/agregar-producto',async function (req, res) {
    // console.log('client');
    let producto = req.body;
    // console.log(producto);
    await db.connectBD();
    let result = await product_q.addProducts(producto);
    // res.send('hola estas en listar-ventaes');
    // console.log("hola estas en crear-producto");
    res.send(result);
})

router.put('/actualizar-producto',async function (req, res) {
    // console.log('client');
    let producto = req.body;
    // console.log(producto);
    await db.connectBD();
    let result = await product_q.updateProducts(producto);
    // res.send('hola estas en listar-ventaes');
    // console.log("hola creaste producto crear-producto");
    res.send(result);
})
 

 

module.exports = router;