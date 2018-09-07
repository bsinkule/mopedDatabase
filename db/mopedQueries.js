const knex = require('./connection')

const getAll = () => knex('mopeds') 

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