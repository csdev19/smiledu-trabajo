const express = require('express');
const router = express.Router();
const venta_q = require('./sales_query');
const db = require('../config/db');

router.get('/ver-ventas', async function  (req, res) {
    await db.connectBD();
    let resultadoDB = await venta_q.verVentasMejor();
    res.send(resultadoDB);
})

router.post('/crear-venta',async function (req, res) {
    let venta = req.body;
    await db.connectBD();
    let result = await venta_q.crearVenta(venta)
    res.send(result);
 })
 
 
router.post('/venta-carrito', async (req, res) => {
    try {
        console.log('estas en el back');
        let lista_ventas = req.body;
        await db.connectBD();

        // console.log(lista_ventas)

        /// correlativo funciona pero tengoq ue hacerlo de otra forma
        // for(let i = 0; i < lista_ventas.length; i++) {
        //     let correlativo = (await venta_q.getCorrelativo(lista_ventas[i].id_producto, lista_ventas[i].id_cliente)).correlativo;
        //     // console.log("arriba" + correlativo);
        //     lista_ventas[i].correlativo = correlativo ? correlativo + 1 : 1;
        //     // console.log("abajo" + correlativo);
        //     await venta_q.crearVenta(lista_ventas[i])
        // }
    
        for(let i = 0; i < lista_ventas.length; i++) {
            await venta_q.crearVenta(lista_ventas[i])
        }

        
        console.log('acabo el bucle del back');
        res.status(200).send();
 
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
 })
 

module.exports = router;