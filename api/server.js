const express = require('express');
const server = require('http');
var compression = require('compression');
var helmet = require('helmet');
const app = express();
const httpInstance = require("./http/http");

const PORT = 5001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(compression());
app.use(helmet())
const http = httpInstance.initiateAxios();

app.get('/api/firstvisit', async (req, res) => {
  try{
    const response = await http.get('/taralind/survey/firstvisit');
    res.send(response.data);
  }catch(error){
    res.status(400).send('Error while fetching survey');
  }
});

app.get('/api/recurringvisit', async (req, res) => {
    await http.get('/taralind/survey/recurringvisit').then(response => {
      res.send(response.data);
    }).catch(error => {
      res.send(error);
      //res.status(400).send('Error while fetching survey');
  });
});

app.post('/api/saveresults', async (req, res) => {
  try{
    const { body } = req;
    const response = await http.post('/taralind/survey/saveresults', body);
    res.send(response.data);
  }catch(error){
    res.status(400).send('Error while saving response');
  }
});

app.get('/api/logs', async (req, res) => {
  try{
    const response = await http.get('/taralind/logs');
    res.send(response.data);
  }catch(error){
    var errorObj = {
      error : error,
      message : 'Error while fetching logs'
    }
    res.status(400).send(errorObj);
  }
  
});

app.get('/api/logs/date/:date', async (req, res) => {
  try{
    const response = await http.get(`/taralind/logs/date/${req.params.date}`);
    res.send(response.data);
  }catch(error){
    var errorObj = {
      error : error,
      message : 'Error while fetching logs'
    }
    res.status(400).send(errorObj);
  }
});

app.get('/api/logs/errors', async (req, res) => {
  try{
    const response = await http.get('/taralind/logs/errors');
    res.send(response.data);
  }catch(error){
    var errorObj = {
      error : error,
      message : 'Error while fetching logs'
    }
    res.status(400).send(errorObj);
  }
});

var httpServer = server.createServer(app);
httpServer.listen(PORT, () => {
  console.log("Runnig HTTP on ", PORT)
});