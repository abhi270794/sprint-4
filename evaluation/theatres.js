const { Mongoose } = require("mongoose");



const playlistSchema3 = new mongoose.Schema({
    name :{
        type: String,
        required : true
    },
    location: {
        type : String,
        required : true
    },
       

})

 const Playlist3  = new mongoose.model("Playlist3", playlistSchema3);