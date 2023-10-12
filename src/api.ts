import { Router } from "express";

import { fetchLatestQuote, fetchQuote } from "./database";

const apiRouter: Router = Router();

apiRouter.use((_req, res, next) => {
    res.append("Access-Control-Allow-Origin", "*");
    next();
});

apiRouter.get("/quote/latest", (_req, res) => {
    const latestQuote = fetchLatestQuote();
    res.send({
        quote: latestQuote
    });
});

apiRouter.get("/quote/:index", (req, res) => {
    const id = parseInt(req.params.index);

    if (isNaN(id)) {
        res.status(400).send({
            error: "Index is NaN"
        });
        return;
    }

    const quote = fetchQuote(id);

    res.send({
        quote: quote
    });
});


export { apiRouter };