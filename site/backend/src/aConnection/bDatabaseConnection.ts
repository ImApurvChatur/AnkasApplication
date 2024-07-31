import mongoose from "mongoose";


const databaseConnection = () => {
  const DB_URL = "mongodb+srv://AlwaysCoolUser:AlwaysCool@apurvchatur.ods89az.mongodb.net/";

  mongoose.set("strictQuery", true);
  mongoose
    .connect(DB_URL, { dbName: "BeehiveDatabase" })
    .then(response => {
      console.log(`Great... MongoDB connected on server ${response.connection.host} at ${response.connection.name}`);
    })
    // .catch(error => {
    //   console.log(error);
    // })
}

export default databaseConnection;
