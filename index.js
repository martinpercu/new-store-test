const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://localhost/8080', 'http://localhost/3000', 'https://mysuperapp.com'];
const options = = {
  origin: (origin, callbacks) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('not allow!! check cors issue'));
    }
  }
}
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello in my serve Express');
});

app.get('/new-path', (req, res) => {
  res.send('Hello I\'m a new pathjpress');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('mi port es ', port);
});
