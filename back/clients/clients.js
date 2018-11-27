const express = require('express');
const router = express.Router();
const client_q = require('./client_query');
const db = require('../config/db');

router.get('/ver-clientes', async function  (req, res) {
    // console.log("hola estas en ver-clientes");
    await db.connectBD();
    let resultadoDB = await client_q.getClientsTable();
    // console.log(resultadoDB);
    res.send(resultadoDB);
})

router.post('/agregar-clientes',async function (req, res) {
    // console.log('client');
    let client = req.body;
    // console.log(client);
    await db.connectBD();
    let result = await client_q.addClients(client)
    // res.send('hola estas en listar-clientes');
    // console.log("hola estas en agregar-clientes");
    res.send(result);
})
 
 
module.exports = router;