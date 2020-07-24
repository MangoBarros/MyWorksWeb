const workManager = require("src/managers/work-manager");

module.exports = app  => {
    app.get("/works", async ctx => {
        const works = await workManager.getAll();

        ctx.body = works;
    });
}