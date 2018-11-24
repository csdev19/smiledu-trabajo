const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./config/db');

// import querys
const client_q = require('./clients/client_query')
const category_q = require('./categories/categories_query')
const venta_q = require('./sales/sales_query')
const product_q = require('./products/product_query')


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());


app.get('/', function (req, res) {
   res.send('Hello');
})


app.get('/ver-clientes', async function  (req, res) {
   console.log("hola estas en ver-clientes");
   await db.connectBD();
   let resultadoDB = await client_q.getClients();
   // console.log(resultadoDB);
   res.send(resultadoDB);
})


// POST METHOD
app.post('/agregar-clientes',async function (req, res) {
   console.log('client');
   let client = req.body;
   console.log(client);
   await db.connectBD();
   let result = await client_q.addClients(client)
   // res.send('hola estas en listar-clientes');
   console.log("hola estas en agregar-clientes");
   res.send(result);
})

app.get('/eliminar-cliente', function (req, res) {
   res.send('hola estas en listar-clientes');
   console.log("hola estas en listar-clientes");
})

app.get('/modificar-cliente', function (req, res) {
   res.send('hola estas en listar-clientes');
   console.log("hola estas en listar-clientes");
})



//           CATEGORIA
app.get('/ver-categorias', async function  (req, res) {
   console.log("hola estas en ver-categorias");
   await db.connectBD();
   let resultadoDB = await category_q.getCategories();
   // console.log(resultadoDB);
   res.send(resultadoDB);
})


//             VENTA
// POST METHOD
app.post('/crear-venta',async function (req, res) {
   console.log('client');
   let venta = req.body;
   // console.log(venta);
   await db.connectBD();
   let result = await venta_q.crearVenta(venta)
   // res.send('hola estas en listar-ventaes');
   console.log("hola estas en crear-venta");
   res.send(result);
})

app.get('/ver-ventas', async function  (req, res) {
   console.log("hola estas en ver-ventas");
   await db.connectBD();
   let resultadoDB = await venta_q.verVentasMejor();
   // console.log(resultadoDB);
   res.send(resultadoDB);
})


// productos
app.get('/ver-productos', async function  (req, res) {
   console.log("hola estas en ver-productos");
   await db.connectBD();
   let resultadoDB = await product_q.getProducts();
   // console.log(resultadoDB);
   res.send(resultadoDB);
})



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

