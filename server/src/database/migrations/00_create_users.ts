import Knex from 'knex'

const up = async (knex: Knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('bio').notNullable()
    table.string('avatar').notNullable()
    table.string('whatsapp').notNullable()
  })
}

const down = async (knex: Knex) => {
  return knex.schema.dropTable('users')
}

export { up, down }
