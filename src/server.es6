import express from 'express';
import bodyParser from 'body-parser';
import renderViewMiddleware from './middleware/renderView';

// init the app
const app = express();
app.use(bodyParser.json());
const notifications = {
  items: [
    {
      serviceId: 1,
      messageType: "success",
      message: "Code was pushed!"
    },
    {
      serviceId: 3,
      messageType: "error",
      message: "Service unavailable in region 1"
    },
    {
      serviceId: 2,
      messageType: "warning",
      message: "Warning: build is taking a long time"
    }
  ]
}

// setup static files, server browser.js (webpacked file) from root
app.use(express.static(__dirname));

app.get('/notifications', (req, res) => {
  res.status(200).send(notifications);
});

app.post('/add', (req, res) => {
  notifications.items.push(req.body);
  res.status(200).send("success");
});

app.delete('/notification/:id', (req, res) => {
  notifications.items.splice(req.params.id, 1);
  res.status(200).send("success");
});

// handle the isomorphic page render
app.get('/', renderViewMiddleware);

// start the app
app.listen(3000, () => {
  console.log('App listening on port: 3000');
});
