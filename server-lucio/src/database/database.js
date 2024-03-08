import Sequelize from 'sequelize'

export const sequelize = new Sequelize('RedSabor-local', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
})