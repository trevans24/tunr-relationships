var DB = require("../models").models;

let lucySongs=[
{
	title: "0 sole mio",
	duration: '3:21',
	date_of_release: '1990',
	album_title: "Three Tenors in Concert"
},
{
	title: 'Nessun dorma',
	duration: '3:21',
	date_of_release: '1990',
	album_title: 'Three Tenors in Concert'
}
];

var artistCreate = function() {
	return DB.Artist.create({
    name: 'Luciano Pavarotti',
    photoUrl: 'http://img.informador.com.mx/biblioteca/imagen/677x508/811/810055.jpg',
    nationality: 'Italiano',
    instrument: 'Voice',
    home_address: '1 Strada Roma'
  })
  .then((artist)=>{
  	lucySongs.forEach((song)=>{
  		song.artistId = artist.id;
  	});
  	DB.Song.bulkCreate(lucySongs);
  });
};

var managerCreate = function() {
	return DB.Manager.create({
    name: 'Ricky Bobby',
    email: 'rbobby@gmail.com',
    office_number: '516-877-0304',
    cell_phone_number: '718-989-1231'
	})
	.then((artist)=>{
		console.log("artist", artist);
		artist.forEach((artist)=>{
			artist.managerId = manager.id;
		});
		DB.Manager.bulkCreate();
	});
};

var songCreate = function() {
	return DB.Song.create({
	    title: 'The Best Song Ever',
	    duration: '3:31',
	    date_of_release: '7/13/2015',
	    album_title: 'Best Album Ever'
	});
};

managerCreate()
.then(artistCreate)
.then(songCreate)
.then(function() {
	process.exit();
});

