const { Pool } = require('pg');

const PG_URI =
  'postgres://ozjhstup:wg0nPKC1L9_PQOksq7allRhTO_0sNWix@suleiman.db.elephantsql.com/ozjhstup';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
