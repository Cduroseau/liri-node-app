require("dotenv").config();

var keys = require("./keys.js")

var spotify = require("node-spotify-api")

var request = require("request")


var getSong = function(songName) {

spotify.search({type: "track", query: songName}, function(err, data) {
        if (err) {
        console("Error occurred:" + err) ;
        return;
        }
        var songs = data.tacks.items;
        for(var i=0; i<songs.length; i++) {
            console.log(i);
            console.log("artist(s):" + songs[i].artists.map(getArtistNames));
            console.log("song name: " + songs[i].name);
            console.log("preview song: " + songs[i].preview_url);
            console.log("------------------------------------");
        }
    });

}

var getMovie = function(movieName){

    request("http://www.omdbapi.com/?t+" + movieName + "&y=&plot+short&r+json", function (error, response, boby) {
        if (!error && response.statusCode === 200) {

            var jsonData = JSON.parse(body);
            console.log("Title: " + jsonData.Title);
            console.log("Year: " + jsonData.Year);
            console.log("Rated: " + jsonData.Rated);
            console.log("IMDB Rating: " + jsonData.imdbRating);
            console.log("Country: " + jsonData.Country);
            console.log("Language: " + jsonData.Language);
            console.log("Plot: " + jsonData.Plot);
            console.log("Actors: " + jsonData.Actors);
            console.log("Rotten tomatoes rating: " + jsonData.tomatoRating);
            console.log("Rotten tomatoes URL: " + jsonData.tomatoURL);
        }
    })
}

// fs.readFile("random.txt", "utf8", function (err, data) {
//     if (err) throw err;
//     console.log(data);
// });


var pick = function(caseData, functionData){
    switch(caseData){
        case "spotify-this-song":
        getSong(functionData);
        break;
        case "movie-this":
        getMovie(functionData);
        default:
        console.log("LIRI does not know that")
    }
}

var runThis = function(argOne, argTwo) {
    pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);