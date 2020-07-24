
// defigns the routes inside de project
const appModulePath = require('app-module-path');
appModulePath.addPath(`${__dirname}/../`);
const app = require('src/app');





//creates and starts the app
app.start()
