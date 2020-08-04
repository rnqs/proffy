import Knex from 'knex'

const up = async (knex: Knex) => {
  return knex.schema.createTable('classes', (table) => {
    table.increments('id').primary()
    table.string('subject').notNullable()
    table.decimal('cost').notNullable()

    table
      .integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
}

const down = async (knex: Knex) => {
  return knex.schema.dropTable('classes')
}

export { up, down }
