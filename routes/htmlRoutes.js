var db = require("../models");
var footballApi = require("../apis/footballApi");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Tabla de ligas
  app.get("/ligas/:country/:season", function (req, res) {
    console.log("::: Lista de Ligas :: " + req.params.country + " :: " + req.params.season);

    footballApi.getLeague(req.params.country, req.params.season, function (apiListaLigas) {
      console.log(apiListaLigas);
      var promises = [];

      apiListaLigas.forEach(function (liga) {
        var promise = db.League.findOne({where: {league_id:liga.league_id}})
        .then(function(resultado){
          if(resultado){
            return resultado
          } else {
            return db.League.create({
              league_id: liga.league_id,
              name: liga.name,
              country: liga.country,
              country_code: liga.country_code,
              season: liga.season,
              logo: liga.logo,
              flag: liga.flag,
            });
          }
        })
          

        promises.push(promise);
      });

      // Esperar que todas las promesas se cumplan
      Promise.all(promises).then(function (resultados) {
        // Renderizar vista de lista de ligas
        res.render("ligas", {
          listaLigas: apiListaLigas
        });
      }).catch(function (error) {
        // Renderizar vista de error
        res.render("index", {
          error: error
        });
      });
    });
  });


  // Load example page and pass in an example by id
  app.get("/equipos/:idLiga", function (req, res) {
    console.log("::: Lista de Equipos:: " + req.params.idLiga);

    footballApi.getTeams(req.params.idLiga, function (apiListaEquipos) {
      console.log(apiListaEquipos.api.teams);
      var promises = [];

      apiListaEquipos.api.teams.forEach(function (equipo) {
        var promise = db.Team.findOne({where: {team_id:equipo.team_id}})
        .then(function(resultado){
          if(resultado){
            return resultado
          } else {
            return db.Team.create({
              team_id: equipo.team_id,
              name: equipo.name,
              logo: equipo.logo,
              country: equipo.country,
              founded: equipo.founded,
              venue_name: equipo.venue_name,
            });
          }
        })
          

        promises.push(promise);
      });

      // Esperar que todas las promesas se cumplan
      Promise.all(promises).then(function (resultados) {
        // Renderizar vista de lista de ligas
        res.render("equipos", {
          listaEquipos: apiListaEquipos.api.teams
        });
      }).catch(function (error) {
        // Renderizar vista de error
        res.render("index", {
          error: error
        });
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
