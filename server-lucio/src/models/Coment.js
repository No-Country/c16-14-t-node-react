import { sequelize } from '../database/database.js'
import { DataTypes } from 'sequelize'

export const Coment = sequelize.define('Coment',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion:{
        type: DataTypes.STRING
    }
})