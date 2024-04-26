const express = require("express");
const globalErrHandler = require("./middlewares/globalErrHandler");
const cors= require("cors");
// const db = require("./config/dbConnect");
const serviceRoute= require("./routes/services/servicesRoute")
const usersRoute = require("./routes/users/usersRoute");

const app = express();

//middlewares
app.use(express.json()); //pass incoming data
//corse middleware
//cors
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to the Dream Interiors API",
  
  });
});
//users route
app.use("/api/v1/users", usersRoute);

app.use("/api/v1/services", serviceRoute);

//Error handlers
app.use(globalErrHandler);
//listen to server

// const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");

const dburl = "mongodb://localhost:27017/scmsproject";
mongoose.connect(dburl).then(() => {
     console.log("Connected to DB Successfully");
}).catch((e) => {
    console.log(e.message);
});

const db = mongoose.connection; 
 
db.on('error', console.error.bind(console, 'Connection error:'));

//const app = express(); 
app.use(express.json());   // to parse JSON data
app.use(cors());  // to enable CORS

//const adminrouter = require("./routes/adminroutes");
 //const studentrouter = require("./routes/studentroutes");
 //const facultyrouter = require("./routes/facultyroutes");


 //app.use("", adminrouter);
 //app.use("", studentrouter);
// app.use("", facultyrouter);

const port = 2032;
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});


const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is up and runing on port ${PORT}`));
