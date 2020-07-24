const Koa = require('koa');
const router = require('src/routes');
const Morgan = require('koa-morgan');

const app = new Koa();


app.use(Morgan('combined'));
app.use(router.routes());


exports.start = async function(){
  try{
    this.server = await app.listen(3000)
  }catch(error){
      console.log(error);
  }
}


/*
const json = require('koa-json');
const bodyParser = require('koa-bodyparser');
const works = ["Lia", "Koi", "Casca de noz"];

app.use(json())
app.use(bodyParser());
*/