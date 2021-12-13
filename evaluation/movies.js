const { Mongoose } = require("mongoose");



const playlistSchema1 = new mongoose.Schema({
    name :{
        type: String,
        required : true
    },
    actors: {
        type : Array,
        required : true
    },
        languages : {
            type: Array,
            required : true
        },
        directors : {
          type: Array,
          poster
        }

})

 const Playlist1  = new mongoose.model("Playlist1", playlistSchema1);