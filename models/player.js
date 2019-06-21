module.exports = function (sequelize, DataTypes){
    var Player = sequelize.define("Player", {
        player_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        age: DataTypes.INTEGER,
        team_id: DataTypes.INTEGER,
        team_name: DataTypes.STRING
    });

    return Player;
}