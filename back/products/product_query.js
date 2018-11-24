
function getProducts() {
    return new Promise((resolve, reject) => {
        let sql = `SELECT *
                     FROM productos`;
        global.dbp.any(sql)
        .then(res => {
            return resolve(res);
        }).catch(err => {
            return reject(err);
        });
    });
}
 
function addProducts(producto) {
    console.log('llamaste a crearproducto');
   //  console.log(producto);

    return new Promise((resolve , reject) => {
        let sql = `INSERT INTO public.productos(
                      nombre_producto, precio, id_categoria)
                      VALUES ($1, $2);`;
        global.dbp.none(sql, [producto['id_cliente'], producto['precio'], producto['id_categoria'] ])
          .then(res => {
          //   return resolve(res);
             // ahora deberiamos decir si funciono 
             console.log('funciono'+res);
             return 'Funciono';
          }).catch(err => {
          //   return reject(err);
            //  console.log(err);
             return 'Hubo un error';
          });
    });
 }
 
 

module.exports = {
    getProducts,
    addProducts
}