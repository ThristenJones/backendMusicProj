const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const repoContext = require('./repository/repository-wrapper')
const { validateProduct } = require('./middleware/products-validation');


app.listen(3000, function () {
    console.log("Server started")
});


app.get('/api/songs/:id', (req, res) => {
    const id = req.params.id;
    const song = repoContext.songs.findSongById(id);
    return res.send(song);
    
});

app.post('/api/songs', [validateProduct], (req, res) => {
    const newSong =req.body;
    const addedSong = repoContext.songs.createSong(newSong);
    return res.send(addedSong)
})

app.put('/api/songs/:id', [validateProduct], (req, res) => {
    const id = req.params.id;
    const songsPropertiesToUpdate = req.body;
    const updatedSong = repoContext.songs.updateSong(id,songsPropertiesToUpdate);
    return res.send(updatedSong)
})

app.delete('/api/songs/:id', (req, res) => {
    const id = req.params.id;
    const updatedDataSet = repoContext.songs.deleteSong(id);
    return res.send(updatedDataSet);
});


