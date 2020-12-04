const {
    create_medicamento,
    consultar_medicamentos,
} = require('./medicamentos.service');

module.exports = {
    createMedicamento: (req, res) =>{
        const body = req.body;
        console.log(body);
        create_medicamento(body, (err, result)=>{
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
    consultarMedicamentos: (req, res) =>{
        consultar_medicamentos((err, results)=>{
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