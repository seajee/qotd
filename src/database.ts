import sql from "mysql"

const {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_COLUMN,
    DB_TABLE
} = process.env;

console.log(DB_HOST);
console.log(DB_USER);
console.log(DB_PASSWORD);
console.log(DB_NAME);
console.log(DB_COLUMN);
console.log(DB_TABLE);

const db = sql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
});

db.connect((err) => {
    if (err) throw err;
});

function setupDatabase(){
    db.query(
        ["CREATE", "DATABASE", "IF", "NOT", "EXISTS", DB_NAME].join(" "),
        (err, _result, _fields) => {
            if (err) throw err;
        }
    );

    db.query(
        ["CREATE", "DATABASE", DB_NAME].join(" "),
        (err, _result, _fields) => {
            if (err) throw err;
        }
    );
}

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

export {
    setupDatabase,
    fetchLatestQuote,
    fetchQuote
};
