const {createPool} = require("mysql");

const ConnectionDB = new Promise ((resolve,reject)=>{
    const conexion = createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: '',
        database: process.env.MYSQL_DATABASE,
    });
    module.exports = conexion;
    resolve(conexion)
})

ConnectionDB
    .then((conexion)=>{
        console.log(`Successful connection`);
    }).catch((err)=>{
        console.log(err);
    })