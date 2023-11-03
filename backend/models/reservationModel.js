const { DataTypes } = require("sequelize");
const { sequelize } = require("./conn");

const Reservation = sequelize.define("reservation", {
  // primaryKey: true,
  // autoIncrement: true,
  // allowNull: false,
  // defaultValue: 2.99
  // unique: true, // Added this back in

  res_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
  no_of_guest: {
        type: DataTypes.INTEGER,
        allowNull: false
    },    
    res_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    res_time: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cust_notes: {
          type: DataTypes.TEXT,
          allowNull: true
      },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
      },
      dt_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        },  
      },
  {
    timestamps: false,
  }
);
Reservation.sync();
module.exports = Reservation;