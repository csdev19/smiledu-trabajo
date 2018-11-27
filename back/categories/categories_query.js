function getCategories() {
    return new Promise((resolve, reject) => {
        let sql = `SELECT *
                     FROM categorias`;
        global.dbp.any(sql)
          .then(res => {
            return resolve(res);
          }).catch(err => {
            return reject(err);
        });
    });
}
 

function addCategories(categoria) {
    // console.log('llamaste a crearcategoria');
   //  console.log(categoria);

    return new Promise((resolve , reject) => {
        let sql = `INSERT INTO public.categorias(
                      nombre_categoria)
                      VALUES ($1);`;
        global.dbp.none(sql, [categoria['nombre_categoria']])
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
    getCategories,
    addCategories
}