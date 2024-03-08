require('dotenv').config();
const { Sequelize } = require('sequelize');

const fs = require('fs');
const path = require('path');
const { USER, PASS, DATABASE, PORT_DB, URL_DB, DB_LOCAL_USER, DB_LOCAL_PASSWORD, DB_LOCAL_HOST, } = process.env;

//aws db
// const sequelize = new Sequelize(DATABASE, USER, PASS, {
//   host: URL_DB,
//   port: PORT_DB,
//   dialect: 'postgres',
//   logging: false,
//   native: false,
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     }
//   }
// })

// local db
const sequelize = new Sequelize(`postgres://${DB_LOCAL_USER}:${DB_LOCAL_PASSWORD}@${DB_LOCAL_HOST}/redsabor`, {
  logging: false, 
  native: false, 
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Recipe, Ingredient, Step } = sequelize.models;

User.hasMany(Recipe);
Recipe.belongsTo(User);

Recipe.belongsToMany(Ingredient, { through: 'recipeingredient'});
Ingredient.belongsToMany(Recipe, { through: 'recipeingredient'});

Recipe.hasMany(Step);
Step.belongsTo(Recipe);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
}

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch((err) => {
//     console.log('Unable to connect to the database', err);
//   })