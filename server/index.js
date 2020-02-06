const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const accountRouter = require("./routes/account");
const userRouter = require("./routes/user");
const appRouter = require("./routes/app");

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/account", accountRouter);
app.use("/api/user", userRouter);
app.use("/api/app", appRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: "error",
    message: err.message
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
