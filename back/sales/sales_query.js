function verVentasMejor() { 
   return new Promise((resolve, reject) => {
       let sql = `SELECT p.nombre_producto, 
                    p.id_producto,
                    c.nombres,
                    c.id_cliente,
                    v.precio_venta, 
                    to_char(v.fecha_compra::date,'DD/MM/YYYY') FROM productos p, 
                    clientes c, 
                    ventas v
                    WHERE v.id_cliente=c.id_cliente and v.id_producto=p.id_producto order by v.fecha_compra desc;
                `;
       global.dbp.any(sql)
       .then(res => {
           return resolve(res);
       }).catch(err => {
           return reject(err);
       });
   });
}

function crearVentaCorrelativo(venta) {
    console.log(venta);
    // console.log('hola estas en el query');
    console.log(venta['nombre_producto']);
    return new Promise((resolve , reject) => {
        let sql = `INSERT INTO public.ventas(
                    id_producto, id_cliente, precio_venta, correlativo)
                    VALUES ($1, $2, $3,$4);`;
        global.dbp.result(sql, [venta['id_producto'], venta['id_cliente'], venta['precio_venta'] ,venta['correlativo']])
        .then(res => {
            
            // console.log('funciono',res);
            console.log('funciono');
            // return true;
            resolve(true);
        }).catch(err => {
            //   reject({error : 'crearVenta =>'+ err});
            reject({error : 'crearVenta =>'});
            // console.log('fallo', venta['nombre_producto']);
            // return venta['nombre_producto'];
        });
    });
}

 
function crearVenta(venta) {
    console.log(venta);
    // console.log('hola estas en el query');
    console.log(venta['nombre_producto']);
    return new Promise((resolve , reject) => {
        let sql = `INSERT INTO public.ventas(
        id_producto, id_cliente, precio_venta)
        VALUES ($1, $2, $3);`;
        global.dbp.result(sql, [venta['id_producto'], venta['id_cliente'], venta['precio_venta']])
        .then(res => {
            // console.log('funciono',res);
            console.log('funciono');
            // return true;
            resolve(true);
            }).catch(err => {
            //   reject({error : 'crearVenta =>'+ err});
            reject({error : 'crearVenta =>'}+ err);
            // console.log('fallo', venta['nombre_producto']);
            // return venta['nombre_producto'];
        });
    });
}


function getCorrelativo(id_producto,id_cliente) {
    return new Promise((resolve,reject) => {
        let sql = `SELECT MAX(correlativo) AS correlativo
        FROM ventas
        WHERE id_producto = $1
        AND id_cliente  = $2 `;
        global.dbp.any(sql, [id_producto,id_cliente])
            .then(res => {
                //  console.log('getCorrelativo=>>>',res)
                resolve(res[0]);
            })
            .catch(err => {
            //  reject({error : 'getCorrelativo =>'+ err});
            reject({error : 'getCorrelativo =>'});
        });
    });
}

module.exports = {
    crearVenta,
    crearVentaCorrelativo,
    verVentasMejor,
    getCorrelativo
}
