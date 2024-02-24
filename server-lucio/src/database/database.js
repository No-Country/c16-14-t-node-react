import Sequelize from 'sequelize'

export const sequelize = new Sequelize('RedSabor', 'postgres', 'password00', {
    host: 'localhost',
    dialect: 'postgres'
})