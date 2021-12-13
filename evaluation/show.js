const { Mongoose } = require("mongoose");



const playlistSchema = new mongoose.Schema({
    timing :{
        type: String,
        required : true
    },
    movie: {
        type : String,
        required : true
    },
        total_seats : {
            type: String,
            required : true
        }

})

 const Playlist  = new mongoose.model("Playlist", playlistSchema);