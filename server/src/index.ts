import express, { Application } from "express";

const PORT = process.env.PORT || 8080;

const app: Application = express();

const quotes: Array<string> = [
    "I'm a teapot",
    "Testing testing, 1, 2, 3",
    "the end is never the end is never the end..."
];

app.get("/api", (_req, res) => {
    res.send({
        quote: quotes[quotes.length - 1]
    });
});

app.get("/api/:index", (req, res) => {
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
        data: quotes[index]
    });
});

console.log("Listening on port " + PORT);
app.listen(PORT);
