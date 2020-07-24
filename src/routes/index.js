const KoaRouter = require("koa-router");
const router = new KoaRouter();


require("src/controllers/work-controller")(router);

module.exports = router;



