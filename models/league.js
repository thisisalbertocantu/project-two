module.exports = function(sequelize, DataTypes) {
    var League = sequelize.define("League", {
      league_id: DataTypes.INTEGER,
      name: DataTypes.TEXT,
      country: DataTypes.TEXT,
      country_code: DataTypes.TEXT,
      season: DataTypes.INTEGER,
      logo: DataTypes.STRING,
      flag: DataTypes.STRING,
    });
    return League;
  };