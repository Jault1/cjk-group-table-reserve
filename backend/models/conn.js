const { Sequelize } = require("sequelize")
const { dotenv } = require("env")

// DB Connection Configuration
const sequelize = new Sequelize('tblReservations', 'root', 'mysqlpa$$word', {
    host: 'localhost',
    dialect: 'mysql',
});


// Test connection function
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        return true;
    } catch (error) {
        console.error("Unable to connect to the database:", error);
        return false;
    }
}

module.exports = {sequelize, testConnection}
