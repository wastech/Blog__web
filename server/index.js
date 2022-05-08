const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
// const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const cloudinary = require("cloudinary");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const cors = require("cors");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");
  const serveStatic = require("serve-static");
  const history = require("connect-history-api-fallback")
    // Load env vars
    dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

// Route files
// Setting up cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const auth = require("./routes/auth");
const users = require("./routes/users");
const categories = require("./routes/categories");
const comments = require("./routes/comments");
const replies = require("./routes/replies");
const posts = require("./routes/posts");

const app = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// File uploading
// app.use(fileUpload({ useTempFiles: true }));

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// // Rate limiting
// const limiter = rateLimit({
//   windowMs: 10 * 60 * 1000, // 10 mins
//   max: 100,
// });
// app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(cors());

// if (process.env.NODE_ENV === "production") {
//   app.use(history());
//   app.use(serveStatic(__dirname + "/dist/spa"));
 
// }
// Production
// if (process.env.NODE_ENV === "production") {
  // Static folder
  // app.use(express.static(__dirname + "/dist/"));

  // handle & forward reqest errors
  // app.use((error, req, res, next) => {
  //   res.status(error.statusCode || 500).json({
  //     status: error.status,
  //     message: error.message,
  //   });
  // });
  // Handle SPA
  // app.get(/.*/, (req, res) => res.sendFile(__dirname + "/dist/index.html"));
// }


// Mount routers

app.use("/api/v1/auth", auth);
app.use("/api/v1/users", users);
app.use("/api/v1/categories", categories);
app.use("/api/v1/comments", comments);
app.use("/api/v1/replies", replies);
app.use("/api/v1/posts", posts);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
