const knex = require('./connection')

const getAll = () => knex('mopeds') // 'ipas' is the [table_name]

// const getOneBeer = () =>  knex('ipas').where('id', req.params.id)
// ABOVE won't work cause we don't have access to req.params.id anymore, BELOW works
const getOne = (id) =>  knex('mopeds').where('id', id)

const postOne = (body) => knex('mopeds').insert(body).returning('*')

const updateOne = (id, body) => knex('mopeds').where('id', id).update(body).returning('*')

const deleteOne = (id) => knex('mopeds').where('id', id).del().returning('*')

module.exports = {
    getAll,
    getOne,
    postOne,
    updateOne,
    deleteOne
}