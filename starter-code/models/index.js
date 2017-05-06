//Connect
var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://troy@localhost:5432/tunr_relationships');

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var Artist = sequelize.import("./artist");
var Manager = sequelize.import("./manager");
var Song = sequelize.import("./song");
module.exports.models = {
	Artist: Artist,
	Manager: Manager,
	Song: Song
};

Song.belongsTo(Artist);
Artist.hasMany(Song);

Artist.belongsTo(Manager);
Manager.hasMany(Artist);