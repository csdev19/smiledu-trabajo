

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

function getClientsTable() {
    return new Promise((resolve, reject) => {
        let sql = `
        select c.id_cliente, 
		c.nombres, 
        c.apellidos, 
        to_char(c.fecha_nacimiento::date,'DD/MM/YYYY'),
        c.correo, c.direccion 
        from clientes c;`;
        global.dbp.any(sql)
        .then(res => {
            return resolve(res);
        }).catch(err => {
            return reject(err);
        });
    });
}
 

 

function addClients(cliente) {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO public.clientes(
                      nombres, apellidos, fecha_nacimiento, correo, direccion)
                      VALUES ($1, $2, $3, $4, $5);`;
        global.dbp.none(sql, [cliente['nombres'], cliente['apellidos'], cliente['to_char'], cliente['correo'], cliente['direccion']])
          .then(res => {
          //   return resolve(res);
             // ahora deberiamos decir si funciono 
            //  console.log('funciono'+res);
             return true;
          }).catch(err => {
          //   return reject(err);
            //  console.log(err);
             return false;
          });
    });
 }


module.exports = {
    getClients,
    getClientsTable,
    addClients
}