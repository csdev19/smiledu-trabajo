const express = require('express');
const router = express.Router();
const venta_q = require('./sales_query');
const db = require('../config/db');

router.get('/ver-ventas', async function  (req, res) {
    // console.log("hola estas en ver-ventas");
    await db.connectBD();
    let resultadoDB = await venta_q.verVentasMejor();
    // console.log(resultadoDB);
    res.send(resultadoDB);
})

router.post('/crear-venta',async function (req, res) {
    // console.log('client');
    let venta = req.body;
    // console.log(venta);
    await db.connectBD();
    let result = await venta_q.crearVenta(venta)
    // res.send('hola estas en listar-ventaes');
    // console.log("hola estas en crear-venta");
    res.send(result);
 })
 

module.exports = router;