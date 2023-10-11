import express, { Application } from "express";
import "dotenv/config"

// Constants
const PORT = process.env.PORT || 8080;
const CWD = process.env.INIT_CWD;

const app: Application = express();
const quotes: Array<string> = [
    "I'm a teapot",
    "Testing testing, 1, 2, 3",
    "the end is never the end is never the end..."
];

// Static content
app.use(express.static("public"));
app.use("/chota.css", express.static(CWD + "/node_modules/chota/dist/chota.css"));
app.use("/assets", express.static(__dirname + "/public/assets"))

// API
app.use((_req, res, next) => {
    res.append("Access-Control-Allow-Origin", "*");
    next();
});

app.get("/api/quote/latest", (_req, res) => {
    res.send({
        quote: quotes[quotes.length - 1]
    });
});

app.get("/api/quote/:index", (req, res) => {
    const index = parseInt(req.params.index);

    if (isNaN(index)) {
        res.status(400).send({
            error: "Index is NaN"
        });
        return;
    }

    if (index < 0 || index >= quotes.length) {
        res.status(406).send({
            error: "Out of Bounds"
        });
        return;
    }

    res.send({
        quote: quotes[index]
    });
});

// Start the server
app.listen(PORT, () => {
    console.log("Server started at http://localhost:" + PORT);
});
