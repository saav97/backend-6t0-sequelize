const Estudiante = require('../models/estudiante');

exports.postEstudiante = async (req, res) =>{

    try {
        const estu = await Estudiante.create(req.body);
        res.status(200).json({
            estudiante:estu,
            msg: 'Estudiante agregado con exito!'
        })
    } catch (error) {
        res.status(500).json({
            msg:'Error al insertar los datos:'+error
        })
    }
}










exports.createEstudiante = (req , res) =>{
    const {nombre,apellido,f_nacimiento,email,img}  = req.body;
    const estudiante = Estudiante.create({nombre,apellido,f_nacimiento,email,img});

    res.status(200).json({
        estudiante,
        msg:'Estudiante aceptado'
    })

} 