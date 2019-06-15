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
      res.json(results);
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
