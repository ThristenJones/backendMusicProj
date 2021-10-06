const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const repoContext = require('./repository/repository-wrapper')


app.listen(3000, function () {
    console.log("Server started")
});


app.get('/api/songs/:id', (req, res) => {
    const id = req.params.id;
    const song = repoContext.songs.findSongById(id);
    return res.send(song);
    
});


