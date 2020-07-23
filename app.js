const Koa = require('koa');
const json = require('koa-json');
const KoaRouter = require("koa-router");
const path = require('path');
const app = new Koa();
const router = new KoaRouter();
const render = require('koa-ejs');
const bodyParser = require('koa-bodyparser');





const works = ["Lia", "Koi", "Casca de noz"];



app.use(json())
app.use(bodyParser());

/*
app.use(async ctx => ctx.body = {
    msg:"Hello world"
});
*/


render(app,{
    root: path.join(__dirname, 'app/views'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: false
});



router.get('/trabalhos', trabalhos);
router.get('/',index);
router.get('/add', mostraAdd);

router.post("/add", add);


async function add(ctx){
    const body = ctx.request.body;
    works.push(body.work);

    ctx.redirect('/trabalhos');
}


async function index(ctx){
    await ctx.render('index',{
        title:"Hello everyone"
    });
}

async function mostraAdd(ctx){
    await ctx.render('add',{
        title:"Novos Trabalhos"
    });
}


async function trabalhos(ctx){
    await ctx.render('trabalhos',{
        title: 'Things i Worked',
        works: works
    });
}

router.get('/', async ctx => {
    await ctx.render('index',{
        title: 'hello',
       
    });
});




router.get("/test", ctx => ctx.body = "Hello test");

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => console.log("Server Started..."));