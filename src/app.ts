import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import config from './config';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import initialise from './db/initialise';
import { Server } from 'http';
import { Connection } from 'typeorm';

const app = express();

const port = config.port;
const env = config.env;

export async function startApp(): Promise<Server> {
  try {
    const connection: Connection = await initialise().catch(error => {
      throw error;
    });
    console.log(`[db] Connected with ${connection.name}: ${connection.options.type}`);

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/', indexRouter);
    app.use('/users', usersRouter);

    const server = app.listen(port);
    console.log(`Express server listening on port: ${port}, using environment: ${env}.`);
    return server;
  } catch (err) {
    console.log(`:startApp: ${err}`);
    throw err;
  }
}
