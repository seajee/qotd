import express, { Application } from "express";

const PORT = process.env.PORT || 8080;

const app: Application = express();

const quotes: Array<string> = [
    "I'm a teapot",
    "Testing testing, 1, 2, 3",
    "the end is never the end is never the end..."
];

app.get("/", (_req, res) => {
    res.send(quotes[quotes.length - 1]);
});

app.get("/:index", (req, res) => {
    const index = parseInt(req.params.index);

    if (isNaN(index)) {
        res.send("NaN");
        return;
    }

    if (index < 0 || index >= quotes.length) {
        res.send("Out of bounds");
        return;
    }

    res.send(quotes[index]);
});

console.log("Listening on port " + PORT);
app.listen(PORT);
