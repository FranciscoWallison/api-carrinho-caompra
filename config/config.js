require("dotenv").config();

console.log(
  process.env.API_USERNAME,
  process.env.API_PASSWORD,
  process.env.API_DATABASE,
  process.env.API_HOST,
  process.env.API_PORT,
  process.env.API_DIALECT,
  process.env.API_LOGGING
);

module.exports = {
  development: {
    username: process.env.API_USERNAME,
    password: process.env.API_PASSWORD,
    database: process.env.API_DATABASE,
    host: process.env.API_HOST,
    port: process.env.API_PORT,
    dialect: process.env.API_DIALECT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: process.env.API_LOGGING === "true" ? console.log : false,
  },
  test: {
    username: "root",
    password: "123456",
    database: "TesteCarrinhoCompra",
    host: "127.0.0.1",
    dialect: "mariadb",
    port: "3333",
  },
  production: {
    username: process.env.API_USERNAME,
    password: process.env.API_PASSWORD,
    database: process.env.API_DATABASE,
    host: process.env.API_HOST,
    port: process.env.API_PORT,
    dialect: process.env.API_DIALECT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: process.env.API_LOGGING === "true" ? console.log : false,
  },
};
