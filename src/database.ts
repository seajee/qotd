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

function fetchLatestQuote(): string {
    let response: string = "";

    con.connect((err) => {
        if (err) throw err;
        con.query('SELECT ' + DB_COLUMN + ' FROM '+ DB_TABLE + ' DESC LIMIT 0,1', (err, result, _fields) => {
            if (err) throw err;
            response = result[0].quote;
        });
    });

    return response;
}

function fetchQuote(id: number): string {
    const idString = id.toString();
    let response: string = "";

    con.connect((err) => {
        if (err) throw err;
        con.query('SELECT ' + DB_COLUMN + ' FROM '+ DB_TABLE +' WHERE id = ' + idString, (err, result, _fields) => {
            if (err) throw err;
            response = result[0].quote;
        });
    });

    return response;
}

export { fetchLatestQuote };
export { fetchQuote };
