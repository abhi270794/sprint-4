const { Mongoose } = require("mongoose");



const playlistSchema = new mongoose.Schema({
    name :{
        type: String,
        required : true
    },
    theatre: {
        type : String,
        required : true
    },
       

})

 const Playlist  = new mongoose.model("Playlist", playlistSchema);