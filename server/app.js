const express = require("express");
const bugsnag = require("@bugsnag/js");
const bugsnagExpress = require("@bugsnag/plugin-express");

const app = express();

const bugsnagClient = bugsnag('YOUR_BUGSNAG_KEY');
bugsnagClient.use(bugsnagExpress);

const middleware = bugsnagClient.getPlugin('express');
app.use(middleware.requestHandler);

app.get("/", (req, res) => {
  res.send("MERN DevOps Backend is running 🚀");
});

app.get("/error", (req, res) => {
  throw new Error("Intentional error for Bugsnag demo");
});

app.use(middleware.errorHandler);

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
