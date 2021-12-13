const { Mongoose } = require("mongoose");



const userSchema = new mongoose.Schema({
   id: mongoose.Schema.Types.ObjectId,
   email: {type: String, reauired: true},
   password: {type: String , required: true}


})

 const userSchema  = new mongoose.model("User", userSchema);