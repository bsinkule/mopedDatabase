const express = require('express')
const router = express.Router()
const knex = require('../db/connection')

const queries = require('../db/mopedQueries')

router.get('/', (req, res) => {
    queries.getAll() 
        .then(mopeds => {
            res.json({
                vintageScoots: mopeds
            })
        })
})

router.get('/:id', (req, res) => {
    queries.getOne(req.params.id) 
        .then(oneMoped => {
            res.json({
                moped: oneMoped[0] 
            })
        })
})

router.post('/', (req, res) => {
    const body = req.body
    
    queries.postOne(body) 
        .then(postMoped => {
            res.json({
                posted: postMoped[0]
            })
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const body = req.body

    queries.updateOne(id, body)
        .then(updateMoped => {
            res.json({
                updated: updateMoped[0]
            })
        })
})

router.delete('/:id', (req, res) => {
    queries.deleteOne(req.params.id) 
        .then(deleteMoped => {
            res.json({ deleted: deleteMoped[0]})
        })
})

module.exports = router