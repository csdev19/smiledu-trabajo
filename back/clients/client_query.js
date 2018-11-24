

function getClients() {
    return new Promise((resolve, reject) => {
        let sql = `SELECT *
                     FROM clientes`;
        global.dbp.any(sql)
        .then(res => {
            return resolve(res);
        }).catch(err => {
            return reject(err);
        });
    });
}
 
 
 

function addClients(cliente) {
    console.log('llamaste a addclient');
    // console.log(cliente);
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO public.clientes(
                      nombres, apellidos, fecha_nacimiento, correo, direccion)
                      VALUES ($1, $2, $3, $4, $5);`;
        global.dbp.none(sql, [cliente['nombre'], cliente['apellido'], cliente['fecha_nac'], cliente['correo'], cliente['direccion']])
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
    getClients,
    addClients
}