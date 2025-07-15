import mongoose from "mongoose";

const connectToMongoDb = async (URI) => {
  try {
    const con = await mongoose.connect(URI);
    console.log(
      `Server is connected with mongodb on ${con.connection.host}:${con.connection.port}`
    );
  } catch (error) {
    console.log(`Error Occured: ${error}`);
  }
};

export default connectToMongoDb;
