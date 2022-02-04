const mongoose = require("mongoose");
const Frontier_db = "Final_Frontier_db"

mongoose.connect("mongodb://localhost/" + Frontier_db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log(`Established a connection to ${Frontier_db}`))
	.catch(err => console.log("Something went wrong when connecting to the database", err));