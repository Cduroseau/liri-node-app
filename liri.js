require("dotenv").config();

var keys = require("./keys.js")

var spotify = require("node-spotify-api")


var getSong = function(songName) {

spotify.search({type: "track", query: songName}, function(err, data) {
        if (err) {
        console("Error occurred:" + err) ;
        return;
        }
        console.log(data.tracks.items[0])
    });

}