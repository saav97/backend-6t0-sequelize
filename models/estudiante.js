const sequelize = require('../database/db');
const {DataTypes} = require('sequelize');

const Estudiante = sequelize.define('Estudiante',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement 
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:true
    },
    apellido:{
        type:DataTypes.STRING
    },
    f_nacimiento:{
        type:DataTypes.DATE
    },
    email:{
        type:DataTypes.STRING,
        unique:true
    },
    img:{
        type:DataTypes.STRING
    }
})

module.exports = Estudiante;