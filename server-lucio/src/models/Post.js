import { sequelize } from '../database/database.js'
import { DataTypes } from 'sequelize'

import { Step } from './Step.js'
import { Coment } from './Coment.js'

export const Post = sequelize.define('Post',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo:{
        type: DataTypes.STRING
    },
    nacionalidad:{
        type: DataTypes.STRING
    },
    ingredientes:{
        type: DataTypes.STRING
    },
    thumbnail:{
        type: DataTypes.STRING,
        defaultValue: 'no-image.png'
    }
})

Post.hasMany(Step, {foreignKey: 'postId', sourceId: 'id'});
Step.belongsTo(Post, {foreignKey: 'postId', targetId: 'id'});

Post.hasMany(Coment, {foreignKey: 'postId', sourceId: 'id'});
Coment.belongsTo(Post, {foreignKey: 'postId', targetId: 'id'});