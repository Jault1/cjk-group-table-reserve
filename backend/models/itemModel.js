const { DataTypes } = require("sequelize");
const { sequelize } = require("./conn");

const Item = sequelize.define("item", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },    
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
        defaultValue: 2.99
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: "Default description."
    }
    ,
    category_id: {
        type: DataTypes.INTEGER
    }

}
, {
    timestamps: false
});

module.exports = Item;