const songs = [
  {"name": "Nombre", "artist": "Artista", "score": 10},
  {"name": "Nombre 2", "artist": "Artista 2", "score": 8},
  {"name": "Nombre 3", "artist": "Artista 3", "score": 6},
  {"name": "Nombre 4", "artist": "Artista 4", "score": 4}
];

const songsMap = songs.map(song => ({
  name: song.name,
  artist: song.artist,
  score: song.score
}));

export default songsMap;