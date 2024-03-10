const { Sequelize } = require('sequelize');

const connection = new Sequelize('PostgressTestDatabase', 'postgres', 'good123', {
    dialect: 'postgres',
    host: 'localhost'
})


const testDatabase = async ()=>{
    try {
        await connection.authenticate();
        console.log(`The Connection is established Successfully`);
    } catch (error) {
        console.log(`Error in Connection: ${error}`);
    }
}

module.exports = {
   sq:connection,testDatabase
}

   

