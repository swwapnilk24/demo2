import express from 'express'
import forceSSL from 'express-force-ssl'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import { errorHandler as queryErrorHandler } from 'querymen'
import { errorHandler as bodyErrorHandler } from 'bodymen'
import { env } from '../../config'

var path = require('path');

export default (routes) => {
  const app = express()

  /* istanbul ignore next */
  if (env === 'production') {
    app.set('forceSSLOptions', {
      enable301Redirects: false,
      trustXFPHeader: true
    })
    app.use(forceSSL)
  }

  /* istanbul ignore next */
  if (env === 'production' || env === 'development') {
    app.use(cors())
    app.use(compression())
    app.use(morgan('dev'))  
  }

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(routes)
  app.use(queryErrorHandler())
  app.use(bodyErrorHandler())
  app.use(express.static(path.join(__dirname, '../../public')));
  console.log(path.join(__dirname, '../../public'));

  return app
}
