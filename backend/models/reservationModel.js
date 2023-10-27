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
        unique: true, // Added this back in
    },    
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false, // Changed this back to false
        // defaultValue: 2.99
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false, // Changed this back to false
        // defaultValue: "Default description."
    }
    ,
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Changed this back to false
        references: {
          model: "categories",
          key: "id",
        },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Item;