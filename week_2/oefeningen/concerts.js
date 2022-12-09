// Maak een bestand concerts.js aan.

// Beschrijf socialmedia via een constructor function Social. De constructor bevat een parameter, namelijk een object bestaande uit de parameters {website, facebook, twitter, instagram}. De waarde van deze parameters ken je toe aan de corresponderende eigenschappen in de klasse.

function Social({ website, facebook, twitter, instagram }) {
  this.website = website;
  this.facebook = facebook;
  this.twitter = twitter;
  this.instagram = instagram;
}

// Beschrijf een afbeelding via een constructor function Picture. De constructor bevat een parameter, namelijk een object bestaande uit de parameters {small, large = small}. De large parameter bevat een standaardwaarde, namelijk de waarde van de parameter small. De waarde van deze parameters ken je toe aan de corresponderende eigenschappen in de klasse.

function Picture({ small, large = small }) {
  this.small = small;
  this.large = large;
}

// Beschrijf een artiest via een constructor function Artist. De constructor bevat een parameter, namelijk een object bestaande uit de parameters {name, picture = null, social = null}. De waarde van deze parameters ken je toe aan de corresponderende eigenschappen in de klasse.

// function Artist ({name, picture = null, social = null}) { +> fout

// Dit is het juiste
function Artist(name) {
  this.name = name;
  this.picture = null;
  this.social = null;
}

// Dit is wat ik eerst had
function Artist({ name, picture = null, social = null }) {
  this.name = name;
  this.picture = picture;
  this.social = social;
}
// Beschrijf een plaats via een constructor function Place. De constructor bevat een parameter, namelijk een name. De waarde van deze parameters ken je toe aan de corresponderende eigenschappen in de klasse.

function Place({ name }) {
  // Dit moet name in een object zijn, waarom?
  this.name = name;
}

// Beschrijf een schedule (tijdstip van en tot) via een constructor function Schedule. De constructor bevat de parameters from en to. De waarde van deze parameters ken je toe aan de corresponderende eigenschappen in de klasse.

function Schedule(from, to) {
  this.from = from;
  this.to = to;
}

// Beschrijf een concert via een constructor function Concert. De constructor bevat een parameter, namelijk een object bestaande uit de parameters {id, artist, place, schedule}. De waarde van deze parameters ken je toe aan de corresponderende eigenschappen in de klasse.

function Concert({ id, artist, place, schedule }) {
  // Dit moet ook tussen {} staan, not sure why
  this.id = id;
  this.artist = artist;
  this.place = place;
  this.schedule = schedule;
}

// 1. Create the places  en bewaar deze instanties in een array places:

const places = [
  new Place({ name: "Main stage" }),
  new Place({ name: "Stage 2" }),
  new Place({ name: "Stage 3" }),
  new Place({ name: "Stage 4" }),
];

// 2. Create an empty array of concerts

const concerts = [];

// Maak een instantie aan van een Artist klasse:

let artist = new Artist({ name: "Pearl Jam" });
artist.social = new Social({
  website: "https://pearljam.com/",
  facebook: "https://facebook.com/pearljam",
  twitter: "https://twitter.com/pearljam",
  instagram: "https://instagram.com/pearljam",
});
artist.picture = new Picture({
  small:
    "https://assets.rockwerchter.be/files/cache/medium/files/14686-pearl-jam-032020-6c9a9964-flat-lowres-5f1a952633f63.jpg",
});

// 4. Create a new concert
let concert = new Concert({
  id: "0128f970-e411-4098-85f8-7a8c8e8208ff",
  artist: artist,
  place: places[0],
  schedule: new Schedule(1625148000000, 1625148000000),
});

// 5. Add concert to the array concerts
concerts.push(concert);

// 3. Create a new artist
artist = new Artist("alt-J");
artist.social = new Social({
  website: "https://www.altjband.com/",
  facebook: "https://facebook.com/altJ.band",
  twitter: "https://twitter.com/alt_J",
  instagram: "https://instagram.com/unrealalt",
});
artist.picture = new Picture({
  small:
    "https://assets.rockwerchter.be/files/cache/medium/files/alt-j-5f030ee72f4ba.jpg",
});

// 4. Create a new concert
concert = new Concert({
  id: "69262d15-8c4f-4b2b-a8ed-26d8ae977f96",
  artist: artist,
  place: places[1],
  schedule: new Schedule(1625148000000, 1625148000000),
});

// 5. Add concert to the array concerts
concerts.push(concert);

// Output all concerts
console.log(concerts);
