
exports.up = function (knex, Promise) {
    return knex.schema.createTable('mopeds', (table) => {
        table.increments()
        table.text('owner').notNullable()
        table.text('brand').notNullable()
        table.integer('year')
        table.integer('rating')
        })
    }

    exports.down = function (knex, Promise) {
        return knex.schema.dropTable('mopeds')
    }
