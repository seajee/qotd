import sql from "mysql"

const DB_COLUMN = process.env.DB_COLUMN;
const DB_TABLE = process.env.DB_TABLE;

const con = sql.createConnection({
    // TODO: Define this environment variables
    host: process.env.DB_HOST,       // Currently undefined
    user: process.env.DB_USER,       // Currently undefined
    password: process.env.DB_PASSWD, // Currently undefined
    database: process.env.DB_NAME    // Currently undefined
});

function fetchLatestQuote() {
    con.connect(function(err) {
        if (err) throw err;
        con.query('SELECT ' + DB_COLUMN + ' FROM '+ DB_TABLE + ' DESC LIMIT 0,1', function (err, result, fields) {
            if (err) throw err;
            return result[0].quote;
        });
    });
}

function fetchQuote(id: string){
    con.connect(function(err) {
        if (err) throw err;
        con.query('SELECT ' + DB_COLUMN + ' FROM '+ DB_TABLE +' WHERE id = ' + id, function (err, result, fields) {
            if (err) throw err;
            return result[0].quote;
        });
    });
}
