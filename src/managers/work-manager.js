const knex = require("src/database");


class workManager{

    async getAll(){
        const works = await knex("works").select("*");
        return works;
    }
}


module.exports = new workManager();