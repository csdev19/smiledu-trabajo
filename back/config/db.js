
function connectBD() {
    let bd = require('./database.json');
    let __database = 'comercio';
    let bd_user = bd.user;
    let bd_host = bd.host;
    let bd_port = bd.port;
    let bd_pass = bd.pass;
    if(!global.pgpromise) {
        global.pgpromise = require("pg-promise")({
            noWarnings : false
        });
    }
    let __conexion = 'postgres://'+bd_user+':'+bd_pass+'@'+bd_host+':'+bd_port+'/'+__database;
    if(global.dbp) {
        let connString = global.dbp.$pool.options.connectionString;
        if(!connString.includes(__database) || global.dbp.$pool.ending ) {
            global.dbp = pgpromise(__conexion);
        }
    } else {
        global.dbp = pgpromise(__conexion);
    }
 }
 
module.exports = {
    connectBD    
} 