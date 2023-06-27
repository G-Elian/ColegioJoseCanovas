const studensRouter = require('./studens.router');

function routerApi(app){
app.use('/studens', studensRouter);
}

module.exports = routerApi;
