import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';

import pg from './ormconfig';

export default async (): Promise<Connection> => {
  try {
    const connection = await createConnection(pg);
    return connection;
  } catch (err) {
    console.log(`:initialise: ${err}`);
    throw err;
  }
};
