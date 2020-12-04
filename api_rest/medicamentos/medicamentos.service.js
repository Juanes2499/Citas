const { json } = require("express");
const pool = require("../../config/database");

module.exports={
    create_medicamento: (data, callback) =>{
        pool.query(
            `insert into medicamentos (tipo_medicamento, nombre_medicamento, descripcion_med, precio_med, proveedor, stock_med) values (?,?,?,?,?,?)`,
            [data.tipo_medicamento, data.nombre_medicamento, data.descripcion_med, data.precio_med, data.proveedor, data.stock_med], 
            (error, result) =>{
                if(error){
                    return callback(error)
                }
                return callback(null,result)
            }
        )
    },
    consultar_medicamentos: callback =>{
        pool.query(
            `select * from medicamentos`,
            [],
            (error, results, fields) =>{
                if(error){
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    eliminar_medicamentos: (data, callback) =>{
        var id = data.id;
        pool.query(
            `select * from medicamentos where id = ?`,
            [id],
            (error,results,fields) => {
                if (results.length===0) {
                    return callback('No hay datos relacioandos');
                }else if(results.length>0){
                    pool.query(
                        `delete from medicamentos where id=?`,
                        [id],
                        (error, results) => {
                            return callback(null, results[0]);
                        }
                    )
                }
            }
        )
    },
    update_medicamento: (data, callBack) => {
        pool.query(
          `UPDATE medicamentos SET tipo_medicamento=?, nombre_medicamento=?, descripcion_med=?, precio_med=?, proveedor=?, stock_med=? WHERE id = ?`,
          [
            data.tipo_medicamento,
            data.nombre_medicamento,
            data.descripcion_med,
            data.precio_med,
            data.proveedor,
            data.stock_med,
            data.id,
          ],
          (error, results, fields) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
    },
}