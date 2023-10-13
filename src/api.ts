import { Router } from "express";

import { fetchLatestQuote, fetchQuote } from "./database";

const apiRouter: Router = Router();

apiRouter.use((_req, res, next) => {
    res.append("Access-Control-Allow-Origin", "*");
    next();
});

apiRouter.get("/quote/latest", (_req, res) => {
    fetchLatestQuote((quote) => {
        res.send({
            quote: quote
        });
    });
});

apiRouter.get("/quote/:id", (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        res.status(400).send({
            error: "Index is NaN"
        });
        return;
    }

    fetchQuote(id, (quote) => {
        res.send({
            quote: quote
        });
    });

});


export { apiRouter };