var express = require('express'),
    cors = require('cors');
var app = express();


app.use(cors());
app.get('/', function (req, res) {
   res.send('Hello');
})

app.get('/mostrar-cliente', function (req, res) {
   var data = {
      'nombre': 'cristian',
      'apellido': 'fabrizio',
      'fecha_nacimiento': '1998-12-19',
      'correo': 'cristiansotomayor1913@gmail.com',
      'direccion': 'Las lilas mzn b lote 5'
   }
   
   res.send(data);
   console.log('llegue'+data);
})

app.get('/agregar-cliente', function (req, res) {
   res.send('hola estas en listar-clientes');
   console.log("hola estas en listar-clientes");
})


app.get('/eliminar-cliente', function (req, res) {
   res.send('hola estas en listar-clientes');
   console.log("hola estas en listar-clientes");
})

app.get('/modificar-cliente', function (req, res) {
   res.send('hola estas en listar-clientes');
   console.log("hola estas en listar-clientes");
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})