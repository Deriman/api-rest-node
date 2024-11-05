const mongoose = require("mongoose");

const dbConnect = async () =>{
    try {
            const DB_URI = await process.env.DB_URI;
            await mongoose.connect(DB_URI);
            console.log("CONEXION")
        }
         catch (error) {
            console.log(error)
         }
}

module.exports = dbConnect;