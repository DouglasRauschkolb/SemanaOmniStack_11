const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 * Método HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma infornmação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end 
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizada para criar ou alterar recursos
  */

  /**
   * Configuran Banco de Dados
   * 
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */


module.exports = app;

