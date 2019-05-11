import { getConnectionOptions, createConnection } from "typeorm";

export const createTypeormConn = async () => {
   const connectionOpts = await getConnectionOptions();

   Object.assign(connectionOpts, {
      name: "default",
      host: process.env.PG_HOST,
      username: process.env.PG_USER,
      password: process.env.PG_PW,
      database: process.env.PG_DB
   });
   return createConnection(connectionOpts);
};

/*
   Two options present themselves here
      1 - use .env files and set the connection up this way
      2 - Set the ENV variables in Docker
   Need to further research both and come back to this
*/
