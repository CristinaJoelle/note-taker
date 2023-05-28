const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

//initalize express
const app = express();

//Specifying the port serveer.js will run on
const PORT = 3001;

//Static middleware
app.use(express.static("public"));
app.use("/", htmlRoutes);
app.use("/notes", apiRoutes);

//Gives you the URL when npm start is put in the console.
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
