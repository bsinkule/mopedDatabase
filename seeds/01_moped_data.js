const mopedData = require('../mopedData')

exports.seed = function (knex, Promise) {
  return knex('mopeds').del()
      .then(function () {
      return knex('mopeds').insert(mopedData)
      });
}
