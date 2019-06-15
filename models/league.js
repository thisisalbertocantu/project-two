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

    League.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        League.hasMany(models.Team, {
          onDelete: "cascade"
        });
      };
    
    return League;
  };