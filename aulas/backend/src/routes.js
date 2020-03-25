const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentControler = require('./controllers/IncidentController');
const ProfileControler = require('./controllers/ProfileController');
const SessionControler = require('./controllers/SessionController');

const connection = require('./database/connection');

const routes = express.Router();

routes.post('/sessions', SessionControler.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentControler.index);
routes.post('/incidents', IncidentControler.create);
routes.delete('/incidents/:id', IncidentControler.delete);

routes.get('/profile', ProfileControler.index);

module.exports = routes;