import sql from "mysql"

const {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_COLUMN,
    DB_TABLE
} = process.env;

const db = sql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
});

db.connect((err) => {
    if (err) throw err;
});

function fetchLatestQuote(): string {
    let response: string = "";

    db.query(
        ["SELECT", DB_COLUMN, "FROM", DB_TABLE, "DESC LIMIT 0,1"].join(" "),
        (err, result, _fields) => {
            if (err) throw err;
            response = result[0].quote;
        }
    );

    return response;
}

function fetchQuote(id: number): string {
    const idString = id.toString();
    let response: string = "";

    db.query(
        ["SELECT", DB_COLUMN, "FROM", DB_TABLE, "WHERE id =", idString].join(" "),
        (err, result, _fields) => {
            if (err) throw err;
            response = result[0].quote;
        }
    );

    return response;
}

function setupDatabase(){
    db.query(
        ["CREATE", "DATABASE", "IF", "NOT", "EXISTS", DB_NAME].join(" "),
        (err, result, _fields) => {
            if (err) throw err;
        }
    );

    db.query(
        ["CREATE", "DATABASE", DB_NAME].join(" "),
        (err, result, _fields) => {
            if (err) throw err;
        }
    );
}

export { fetchLatestQuote };
export { fetchQuote };
