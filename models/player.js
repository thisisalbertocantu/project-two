module.exports = function (sequelize, DataTypes){
    var Player = sequelize.define("Player", {
        player_id: DataTypes.INTEGER,
        player_name: DataTypes.STRING,
        team_id: DataTypes.INTEGER,
        team_name: DataTypes.STRING,
        number: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        age: DataTypes.INTEGER,
        position: DataTypes.STRING,
        injured: DataTypes.STRING,
        rating:{
            type: DataTypes.FLOAT
        },
        captain: DataTypes.INTEGER,
        shotstotal: DataTypes.INTEGER,
        shots_on: DataTypes.INTEGER,
        goals_total: DataTypes.INTEGER,
        passes_total: DataTypes.INTEGER,
        passes_accuracy: DataTypes.INTEGER,
        tackles_total: DataTypes.INTEGER,
        duels_total: DataTypes.INTEGER,
        fouls_drawn: DataTypes.INTEGER,
        cards_yellow: DataTypes.INTEGER,
        cards_yellowred: DataTypes.INTEGER,
        cards_red: DataTypes.INTEGER
    });

    return Player;
}