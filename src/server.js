import http from "node:http";
import app from "./app.js";
import connectToMongoDb from "./db.js";

// SERVER
const server = http.createServer(app);

// MONGODB DATABASE CONNECTION
connectToMongoDb(process.env.MONGODB_URI);

// SERVER REQUEST LISTENER
server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
