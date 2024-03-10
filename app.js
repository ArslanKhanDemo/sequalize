const express = require('express');
const app = express();
const PORT = 3000;



const { testDatabase } = require('./config/db');
testDatabase();

const Student = require('./Models/studentModel');
const Staff = require('./Models/staffModel');



app.get('/enter', async (req,res)=>{
    try {
        let m = Math.random();
        const s = await Staff.create({
            email:`${m}Arsla2nAzhaqr@example.com`,
            staffName:'Ashar',
            age:23,
            employed:false
    
        })
        console.log('ffff: ',s);
        res.status(200).json(s.age);
        
    } catch (error) {
        console.log('ERROR FROM app: ',error);
    }
    

});


app.listen(PORT, () => {
    console.log(`The server is connected to the POST: ${PORT}`);
})
  






























// require('./config/db').testDbConnection()
    // const { sq } = require("./config/db");
    // const { DataTypes } = require("sequelize");
    
    // const User = sq.define("user", {
    //     email: {
    //       type: DataTypes.STRING,
    //       allowNull: false,
    //       primaryKey: true,
    //     },
      
    //     fullName: {
    //       type: DataTypes.STRING,
    //     },
        
    //     age: {
    //       type: DataTypes.INTEGER,
    //     },
      
    //     employed: {
    //       type: DataTypes.BOOLEAN,
    //       defaultValue: false,
    //     },
    //   });
    
    
    
    //   User.sync().then(() => {
    //     console.log("User Model synced");
    //   });
    
    //   const mike = User.create({
    //     email: "Arslan@example.com",
    //     fullName: "Arslan Azhar",
    //     age: 30,
    //     employed: true,
    //   });