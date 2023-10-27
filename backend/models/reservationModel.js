const { DataTypes } = require("sequelize");
const { sequelize } = require("./conn");

const Reservation = sequelize.define("reservation", {
  // | res_id      | int          | NO   | PRI | NULL    | auto_increment |
  // | no_of_guest | int          | NO   |     | NULL    |                |
  // | res_date    | date         | NO   |     | NULL    |                |
  // | res_time    | datetime     | NO   |     | NULL    |                |
  // | cust_notes  | varchar(100) | NO   |     | NULL    |                |
  // | user_id     | int          | NO   |     | NULL    |                |
  // | dt_id       | int          | NO   |     | NULL    |                |
  
  // id > res_id
  // name > no_of_guest
  // price > res_date
  // description > res_time
  // ADD NEW > cust_notes
  // category_id > user_id
  // ADD NEW > dt_id

  // type: DataTypes.STRING,
  // type: DataTypes.INTEGER,
  // type: DataTypes.DECIMAL(10, 2),
  // type: DataTypes.TEXT,

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
        type: DataTypes.DATE,
        allowNull: false
    },
    cust_notes: {
          type: DataTypes.TEXT,
          allowNull: true
      },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        // references: {
        //   model: "categories",
        //   key: "id",
        // },
      },
      dt_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        // references: {
        //   model: "categories",
        //   key: "id",
        // },
        },  
      },
  {
    timestamps: false,
  }
);

module.exports = Reservation;