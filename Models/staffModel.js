const { DataTypes } = require('sequelize');
const { sq } = require('../config/db');



const staff = sq.define("Staff", {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },

    staffName: {
        type: DataTypes.STRING,
    },

    age: {
        type: DataTypes.INTEGER,
    },

    employed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

staff.sync().then(() => {
    console.log("Staff Model synced");
});

module.exports = staff;
