
exports.up = async function(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await knex.schema.createTable("works", table => {
        table
            .uuid("id")
            .primary()
            .defaultTo(knex.raw("uuid_generate_v4()"));
        table.string("name").notNullable();
        table.boolean("finished").defaultTo(false);
    });
};

exports.down = function(knex) {
    throw new Error("Irreversible Migration");
};
