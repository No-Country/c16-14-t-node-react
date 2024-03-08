import { sequelize } from '../database/database.js'
import { DataTypes } from 'sequelize'

export const Step = sequelize.define('Step',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo:{
        type: DataTypes.STRING
    },
    descripcion:{
        type: DataTypes.STRING
    },
    imagen:{
        type: DataTypes.STRING,
        defaultValue: 'no-image.png'
    }
})