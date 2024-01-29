const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://localhost/8080', 'http://localhost/3000', 'https://mysuperapp.com'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('not allow!! check cors issue'));
    }
  }
}
app.use(cors(options))

app.get('/api', (req, res) => {
  res.send('Hello in my serve Express');
});

app.get('/api/new-path', (req, res) => {
  res.send('Hello I\'m a new pathjpress');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('mi port es ', port);
});
