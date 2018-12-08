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
 
 
router.post('/venta-carrito',async function (req, res) {
    console.log('estas en el back');
    let lista_ventas = req.body;
    // console.log(lista_ventas)
    await db.connectBD();
    // let result;
    lista_ventas.forEach( async(element) => {
        // console.log(element);
        await venta_q.crearVenta(element);
    });
    // listfor(let i=0; i <= lista_ventas.length; i++) {
    // 
    console.log('acabo el bucle del back');
    res.send('ok');
    // res.send('hola estas en listar-ventaes');
    // console.log("hola estas en crear-venta");
 })
 

module.exports = router;