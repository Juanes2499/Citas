const {
    create_cita_retirar_medicamento,
    delete_cita_retirar_medicamento,
    consultar_citas_retirar_medicamento,
} = require('./agendarCitas.service');

module.exports = {
    createAgendarCitas: (req,res) => {
        const body = req.body;
        console.log(body);
        create_cita_retirar_medicamento(body, (err,result) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:false,
                    message: "Database connection error - error in createAgendarCitas"
                })
            }
            return res.status(200).json({
                success:true,
                statusCode:200
            })
        })
    },
    deleteCita: (req,res) => {
        const data = req.body;
        console.log(data);
        delete_cita_retirar_medicamento(data, (err, result) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:false,
                    message: "Database connection error - error in deleteCita"
                })
            }
            return res.status(200).json({
                success:true,
                statusCode:200,
                message: "Register was deleted successfully"
            })
        })
    },
    consultarCitas: (req, res)=>{
        consultar_citas_retirar_medicamento((err,results)=>{
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                statusCode:200,
                data: results
            });
        })
    }
}