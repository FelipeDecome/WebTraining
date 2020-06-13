import knex from 'knex';
import path from 'path';

const conn = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    }
});

export default conn;
