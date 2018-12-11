
function getProductsTabla() {
    return new Promise((resolve, reject) => {
        let sql = `
        SELECT p.id_producto,
            p.nombre_producto,
            p.precio,
            c.nombre_categoria,
            c.id_categoria FROM productos p, categorias c where c.id_categoria = p.id_categoria;`;
        global.dbp.any(sql)
        .then(res => {
            return resolve(res);
        }).catch(err => {
            return reject(err);
        });
    });
}

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
    // console.log('llamaste a crearproducto');
   //  console.log(producto);

    return new Promise((resolve , reject) => {
        let sql = `INSERT INTO public.productos(
                      nombre_producto, precio, id_categoria)
                      VALUES ($1, $2, $3);`;
        global.dbp.none(sql, [producto['nombre_producto'], producto['precio'], producto['id_categoria'] ])
          .then(res => {
          //   return resolve(res);
             // ahora deberiamos decir si funciono 
            //  console.log('funciono'+res);
             return 'Funciono';
          }).catch(err => {
          //   return reject(err);
            //  console.log(err);
             return 'Hubo un error';
          });
    });
 }
 
 function updateProducts(producto) {
    // console.log('llamaste a crearproducto');
   //  console.log(producto);

    return new Promise((resolve , reject) => {
        let sql = `UPDATE public.productos
            SET nombre_producto=$1, precio=$2, id_categoria=$3
            WHERE id_producto=$4;
        `;
        global.dbp.none(sql, [producto['nombre_producto'], producto['precio'], producto['id_categoria'],producto['id_producto'] ])
          .then(res => {
          //   return resolve(res);
             // ahora deberiamos decir si funciono 
            //  console.log('funciono '+res);
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
    getProductsTabla,
    addProducts,
    updateProducts
}