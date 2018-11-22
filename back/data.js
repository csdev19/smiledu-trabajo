var productos = [
    {
       'nombre_producto': 'bicleta',
       'fecha_compra': '2018-10-02',
       'precio': 109.00,
    },
    {
       'nombre_producto': 'pelota',
       'fecha_compra': '2018-10-02',
       'precio': 309.00,
    },
    {
       'nombre_producto': 'iphone',
       'fecha_compra': '2018-10-02',
       'precio': 500.00,
    },
    {
       'nombre_producto': 'play station',
       'fecha_compra': '2003-10-22',
       'precio': 200.00,
    },
    {
       'nombre_producto': 'raqueta',
       'fecha_compra': '1998-12-19',
       'precio': 456.10,
    },
]


var data = [
    {
        'nombre': 'Cristian Fabrizio',
        'apellido': 'sotomayor',
        'edad': 19,
        'correo': 'cristian@gmail.com'
    },
    {
        'nombre': 'Maribel',
        'apellido': 'gonzales',
        'edad': 50,
        'correo': 'mari@gmail.com'
    },
    {
        'nombre': 'Luis',
        'apellido': 'sotomayor',
        'edad': 45,
        'correo': 'luis@gmail.com'
    },
    {
        'nombre': 'diego',
        'apellido': 'sotomayor',
        'edad': 15,
        'correo': 'diego@gmail.com'
    },
    {
        'nombre': 'allison',
        'apellido': 'velasquez',
        'edad': 20,
        'correo': 'allison@gmail.com'
    }
]

//     EXAMPLE CONECTION NODE TO POSTGRE
// function getCorreosToSend_Masivos(year, correlativo) {
//    return new Promise((resolve, reject) => {
//        let sql = `SELECT *
//                     FROM tabla
//                    WHERE year          = $1
//                      AND correlativo   = $2
//                      AND estado_correo = 'PENDIENTE'
//                    LIMIT 100`;
//        global.dbp.any(sql, [year, correlativo]).then(res => {
//            return resolve(res);
//        }).catch(err => {
//            return reject(err);
//        });
//    });
// }
