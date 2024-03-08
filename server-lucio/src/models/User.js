import { sequelize } from '../database/database.js'
import { DataTypes } from 'sequelize'
import { Post } from './Post.js'
import { Coment } from './Coment.js'

export const User = sequelize.define('User',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    nationality:{
        type: DataTypes.STRING
    }
},)

User.hasMany(Post, {foreignKey: 'userId', sourceId: 'id'});
Post.belongsTo(User, {foreignKey: 'userId', targetId: 'id'});

User.hasMany(Coment, {foreignKey: 'userId', sourceId: 'id'});
Coment.belongsTo(User, {foreignKey: 'userId', targetId: 'id'});
