var playlist = new Object({
  "TS" : "BS"
})

function updatePlaylist(playlist, name, title) {
  playlist[name] = title
  return playlist
}

function removeFromPlaylist(playlist, name) {
  
  return delete playlist.name
  
}