const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

//handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const apiRoutes = require("./routes/apiRoutes");
app.use(apiRoutes);


// server listener
app.listen(PORT, () => {
    console.log(`Starting server on http://localhost:${PORT}`);
});