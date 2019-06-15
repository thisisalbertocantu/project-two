module.exports = function (sequelize, DataTypes) {
    var Team = sequelize.define("Team", {
        team_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        logo: DataTypes.STRING,
        country: DataTypes.STRING,
        founded: DataTypes.INTEGER,
        venue_name: DataTypes.TEXT,

    });
    return Team;
};