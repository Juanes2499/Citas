const { json } = require("express");
const pool = require("../../config/database");

module.exports={
    create_cita_retirar_medicamento: (data, callback) => {
        pool.query(
            `INSERT INTO agendar_citas (tipo_id,num_id,eps,email,fecha_cita) values (?,?,?,?,?)`,
            [
                data.tipo_id,
                data.num_id,
                data.eps,
                data.email,
                data.fecha_cita,
            ],
            (error,result, fields) => {
                if(error){
                    return callback(error)
                }
                return callback(null,result)
            }
        )
    },
    delete_cita_retirar_medicamento: (data, callBack) => {
        var tipo_id = data.tipo_id;
        var num_id = data.num_id;
        var fecha_cita = data.fecha_cita;
        
        pool.query(
            `SELECT * FROM agendar_citas WHERE tipo_id = ? and num_id = ? and fecha_cita = ? `,
            [tipo_id,num_id,fecha_cita ],
            (error, results, fields) => {
                if (results.length===0) {
                    return callBack('No hay datos relacioandos');
                }else if(results.length>0){
                    pool.query(
                        `delete from agendar_citas where tipo_id=? and num_id=? and fecha_cita=?`,
                        [tipo_id, num_id, fecha_cita,],
                        (error, results) => {
                            return callBack(null, results[0]);
                        }
                    );
                } 
            }
        );
    },
    consultar_citas_retirar_medicamento: callback =>{
        pool.query(
            `select * from agendar_citas where estado_cita is null`,
            [],
            (error, results, fields) =>{
                if(error){
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    }
}

