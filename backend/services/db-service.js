let oracledb=require('oracledb');

function initOracleClient(){
    try{
        oracledb.initOracleClient();
        console.log("try");
    }
    catch(error){
        console.error("Error while initiating the Oracle cliend. Error: ", error);
        process.exit(1);
    }
}

/*async function connectToDatabase() {
  try {
    await oracledb.createPool({
      user          : process.env.DB_USER,
      password      : process.env.DB_PASSWORD,
      connectString : process.env.DB_CONNECT
    });
    console.log('Connection pool started');  
 
    let connection = await oracledb.getConnection();
    const result = await connection.execute('select 1 from dual', [], {
      outFormat: oracledb.OBJECT
     });
         connection.close();
    console.log(result);
    console.log('Connection tested');
 
  }
  catch (error) {
    console.error('Error while connecting to the database. Error: ', error);
    process.exit(1);
  }
}
 
module.exports = {
  initOracleClient,
  connectToDatabase  
}*/