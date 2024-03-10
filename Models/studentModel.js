const { DataTypes } = require('sequelize');
const { sq } = require('../config/db');



const student = sq.define("Student", {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },

    fullName: {
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

student.sync().then(() => {
    console.log("User Model synced");
});

module.exports = student;
