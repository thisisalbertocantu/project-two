var db = require("../models");
var footballApi = require("../apis/footballApi")

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // League Id
  app.get("/api/football/country/:country/:season", function (req, res) {
    footballApi.getLeague(req.params.country, req.params.season, function (results) {
      var promises = [];

      results.api.leagues.forEach(function (liga) {
        var promise = db.League.create({
          league_id: liga.league_id,
          name: liga.name,
          country: liga.country,
          country_code: liga.country_code,
          season: liga.season,
          logo: liga.logo,
          flag: liga.flag,
        })
        promises.push(promise);
      })
      Promise.all(promises).then(function (resultados) {
        res.json(resultados);
      })
        .catch(function (error) {
          res.send(error);
        })

    });
  });

  // Get the Teams Ids
  app.get("/api/football/teams/league/:leagueId", function (req, res) {
    footballApi.getTeams(req.params.leagueId, function (results) {
      var promisesTeam = [];

      results.api.teams.forEach(function (team) {
        var promiseTeam = db.Team.create({
          team_id: team.team_id,
          name: team.name,
          logo: team.logo,
          country: team.country,
          founded: team.founded,
          venue_name: team.venue_name,
        })
        promisesTeam.push(promiseTeam);
      })
      Promise.all(promisesTeam).then(function (resultados) {
        res.json(resultados);
      })
        .catch(function (error) {
          res.send(error);
        })

    });
  });


  // Player Id
  app.get("/api/football/player/:playerId", function (req, res) {
    footballApi.getPlayer(req.params.playerId, function (results) {
      res.json(results);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};
