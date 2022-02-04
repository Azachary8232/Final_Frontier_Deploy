const express = require("express");
const cors = require('cors')
const app = express();
const PORT = 8000;

//  middleware
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }));

// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");

// This is where we import the users routes function from our user.routes.js file
const AllMyAnswerRoutes = require("./routes/answer.routes");
AllMyAnswerRoutes(app);

app.listen(PORT, () => console.log("The server is all fired up on port 8000"));
