var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
// var sequelize = new Sequelize("sequelize_library", "root", "root", {
//   host: "localhost",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

var sequelize = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
  dialectOptions: {
    ssl: true /* for SSL config since Heroku gives you this out of the box */
  }
});

// Exports the connection for other files to use
module.exports = sequelize;