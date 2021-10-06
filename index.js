const express = require('express');
const app = express();
const repoContext = require('./repository/repository-wrapper')

app.listen(3000, function () {
    console.log("Server started")
});

app.get('/api/songs', (req, res)=> {
    const music = repoContext.songs.findAllSongs();
    return res.send(music);
    
});


