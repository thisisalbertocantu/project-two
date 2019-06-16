// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var unirest = require("unirest");

// Then run a request with axios to the OMDB API with the movie specified

module.exports = {
    getPlayer: function (playerId, callback) {
        unirest.get("https://api-football-v1.p.rapidapi.com/v2/players/player/" + playerId)
            .header("X-RapidAPI-Host", "api-football-v1.p.rapidapi.com")
            .header("X-RapidAPI-Key", "")
            .end(function (result) {
                console.log(result.status, result.headers, result.body);
                callback(result.body);
            });
    },

    getLeague: function (country, season, callback) {
        unirest.get("https://api-football-v1.p.rapidapi.com/v2/leagues/country/" + country + "/" + season)
            .header("X-RapidAPI-Host", "api-football-v1.p.rapidapi.com")
            .header("X-RapidAPI-Key", "")
            .end(function (result) {
                console.log(result.status, result.headers, result.body);
                callback(result.body);
            });
    },

    getTeams: function (leagueId, callback) {
        unirest.get("https://api-football-v1.p.rapidapi.com/v2/teams/league/" + leagueId)
            .header("X-RapidAPI-Host", "api-football-v1.p.rapidapi.com")
            .header("X-RapidAPI-Key", "7c6e531f04msh7480ebf90c3b94cp19b74djsnd1ef57082c8c")
            .end(function (result) {
                console.log(result.status, result.headers, result.body);
                callback(result.body);
            });
    }

};


// New Comment