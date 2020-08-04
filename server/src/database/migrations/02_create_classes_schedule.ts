import Knex from 'knex'

const up = async (knex: Knex) => {
  return knex.schema.createTable('class_schedule', (table) => {
    table.increments('id').primary()

    table.integer('week_day').notNullable()
    table.integer('from').notNullable()
    table.integer('to').notNullable()

    table
      .integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
}

const down = async (knex: Knex) => {
  return knex.schema.dropTable('class_schedule')
}

export { up, down }
