function verVentasMejor() { 
   return new Promise((resolve, reject) => {
       let sql = `select p.nombre_producto, 
	   p.id_producto,
       c.nombres,
       c.id_cliente,
       v.precio_venta, 
       to_char(v.fecha_compra::date,'DD/MM/YYYY') from productos p, 
                       clientes c, 
                       ventas v
where v.id_cliente=c.id_cliente and v.id_producto=p.id_producto order by v.fecha_compra desc;
       `;
       global.dbp.any(sql)
       .then(res => {
           return resolve(res);
       }).catch(err => {
           return reject(err);
       });
   });
}

// Este antogio query
// select p.nombre_producto, 
// 	   p.id_producto,
//        c.nombres,
//        c.id_cliente,
//        v.precio_venta, 
//        to_char(v.fecha_compra::date,'DD/MM/YYYY') from productos p, 
//                        clientes c, 
//                        ventas v
// where v.id_cliente=c.id_cliente and v.id_producto=p.id_producto order by v.fecha_compra desc;

function crearVenta(venta) {
    // console.log('llamaste a crearVenta');
   //  console.log(venta);

    return new Promise((resolve , reject) => {
        let sql = `INSERT INTO public.ventas(
                      id_producto, id_cliente, precio_venta)
                      VALUES ($1, $2, $3);`;
        global.dbp.none(sql, [venta['id_producto'], venta['id_cliente'], venta['precio'] ])
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

module.exports = {
    crearVenta,
    verVentasMejor
}
