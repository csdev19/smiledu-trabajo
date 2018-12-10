const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./config/db');

// imports of routes
const categories = require('./categories/categories');
const clients = require('./clients/clients');
const sales = require('./sales/sales');
const products = require('./products/products');

const category_q = require('./categories/categories_query')


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

app.use('/categories',categories);
app.use('/clientes',clients);
app.use('/sales',sales);
app.use('/products',products);


app.get('/eliminar-cliente', function (req, res) {
   res.send('hola estas en listar-clientes');
   console.log("hola estas en listar-clientes");
})

app.get('/modificar-cliente', function (req, res) {
   res.send('hola estas en listar-clientes');
   console.log("hola estas en listar-clientes");
})


app.delete('/eliminar-categoria',async function (req, res) {
    console.log('client');
    let categoria = req.body;
    // console.log(categoria);
    await db.connectBD();
    let result = await category_q.addCategories(categoria);
    // res.send('hola estas en listar-ventaes');
    console.log("hola estas en crear-categoria");
    console.log("hola estas en crear-categoria");
    res.send(result);
 })

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
   console.log('hola que paso ?')
})

