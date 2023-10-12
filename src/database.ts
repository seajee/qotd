import sql from "mysql"
import "dotenv/config"

const DB_COLUMN = process.env.DB_COLUMN;
const DB_TABLE = process.env.DB_TABLE;

const con = sql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    database: process.env.DB_NAME
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
