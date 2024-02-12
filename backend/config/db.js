const mongoose = require('mongoose');

const connect = async() => {
     try {
      mongoose.set("strictQuery", false)
      const conn = await mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});
      //   const connection = mongoose.connect()
        console.log(`connected To MongoDB Database ${conn.connection.connection.host}`);
     } catch (error) {
        console.log(`Error in MongoDB ${error}`);
       
}
}
module.exports = connect;