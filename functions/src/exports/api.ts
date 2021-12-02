/************ GET and POST requests ************************************************
Redirect requests so that if a custom endpoint function exists we can call them
at /api/[endpoint]
As most functions are called from triggers the api is mostly just used for testing
************************************************************************************/

import * as functions from 'firebase-functions'
import cors from 'cors'
import express from 'express'

console.log('api ready')
const app = express()

// use bodyparse to create json object from body
app.use(express.json())
app.use(
  express.urlencoded({
    extended: false,
  }),
)
// use cors
const corsOptions: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: true,
  preflightContinue: false,
}
// configure app to use cors by default
app.use(cors(corsOptions))
app.all('*', async (req, res, next) => {
  // get the endpoint based on the request path
  const endpoint = req.path.split('/')[1]
  // *** NOTE currently all request types handled the same, i.e. GET/POST
  // will likely change behaviour in future when required
  switch (endpoint) {
    default:
      res.send('invalid api endpoint')
  }
})

export const api = functions.https.onRequest(app as any)
