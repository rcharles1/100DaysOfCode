const express = require('express');
const { ObjectId } = require('mongodb');
const { connectToDb, getDb } = require('./db');

// init app & middleware
const app = express();
app.use(express.json())

let db;

connectToDb((err) => {
    if (!err) {
        app.listen(3000, () => {
            console.log('app listening on port 3000')
        });
        db = getDb();
    }

})

// routes
app.get('/games', (req, res) => {
    // Pagination of results
    const page = req.query.p || 0
    const gamesPerPage = 3

    let games = [];

    db.collection('games')
        .find()
        .sort({name: 1})
        .skip(page * gamesPerPage)
        .limit(gamesPerPage)
        .forEach(game => games.push(game))
        .then(() => {
            res.status(200).json(games)
        })
        .catch(() => {
            res.status(500).json({error: 'Could not fetch the documents'})
        })
})

app.get('/games/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        db.collection('games')
            .findOne({_id: new ObjectId( req.params.id)})
            .then(doc => {
                res.status(200).json(doc)
            })
            .catch(err => {
                res.status(500).json({err: 'Could not fetch the document'})
            })
    } else {
        res.status(500).json({error: 'Not a valid doc id'})
    }

})

app.post('/games', (req, res) => {
    const game = req.body

    db.collection('games')
        .insertOne(game)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({err: 'Could not create new doc'})
        })
})

app.delete('/games/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        db.collection('games')
            .deleteOne({_id: new ObjectId( req.params.id)})
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json({err: 'Could not delete the document'})
            })
    } else {
        res.status(500).json({error: 'Not a valid doc id'})
    }
})

app.patch('/games/:id', (req, res) => {
    const updates = req.body

    if (ObjectId.isValid(req.params.id)) {
        db.collection('games')
            .updateOne({_id: new ObjectId( req.params.id)}, {$set: updates})
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json({err: 'Could not update the document'})
            })
    } else {
        res.status(500).json({error: 'Not a valid doc id'})
    }
})