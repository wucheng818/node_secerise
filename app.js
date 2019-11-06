const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const classic = require('./api/v1/classic');
const book = require('./api/v1/book');
const requireDirectory = require('require-directory');

requireDirectory(module, './api', {
  visit: whenLoadModule
});
function whenLoadModule(obj) {
  if (obj instanceof Router) {
    app.use(obj.routes());
  }
}
// app.use(book.routes())
// app.use(classic.routes())
app.listen(3000);