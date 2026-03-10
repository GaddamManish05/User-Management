import exp from 'express'
import {connect} from 'mongoose'
import { config } from 'dotenv'
import {userApp} from './Apis/UserApi.js'
import cors from 'cors'


config()
// create a express app
const app = exp();
app.use(cors({
    origin : "http://localhost:5174"
}))
// create body parsing middleware
app.use(exp.json());
// create a path to user-api
app.use('/user-api',userApp);
// create a connection to db
const connectDb = async() => {
    try{
        // import from .env file 
        await connect(process.env.DB_URL);
        console.log('Db Connection Done');
        // create a http server 
        app.listen(process.env.PORT,() => {
            console.log('Server Started');
        })
    }catch(err){
        console.log("DB connection Failed",err.message);
    }
}

connectDb();

app.use((err, req, res, next) => {

  console.log("Error name:", err.name);
  console.log("Error code:", err.code);
  console.log("Full error:", err);

  // mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "error occurred",
      error: err.message,
    });
  }

  // mongoose cast error
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "error occurred",
      error: err.message,
    });
  }

  const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code;
  const keyValue = err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue;

  if (errCode === 11000) {
    const field = Object.keys(keyValue)[0];
    const value = keyValue[field];
    return res.status(409).json({
      message: "error occurred",
      error: `${field} ${value} already exists`,
    });
  }

  // ✅ HANDLE CUSTOM ERRORS
  if (err.status) {
    return res.status(err.status).json({
      message: "error occurred",
      error: err.message,
    });
  }

  // default server error
  res.status(500).json({
    message: "error occurred",
    error: "Server side error",
  });
});