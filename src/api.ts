import express, { Router } from "express";

import { fetchLatestQuote, fetchQuote, addQuote } from "./database";

const apiRouter: Router = Router();

apiRouter.use(express.json());
apiRouter.use(express.urlencoded({ extended: true }));

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
/*
apiRouter.post("/quote/latest", (req, res) => {
    
    if (req.body.quote.trim().length === 0) {
        res.status(400).send({
            error: "Quote is empty"
        });
        return;
    }
    if (req.body.quote === null) {
        res.status(400).send({
            error: "Quote is null"
        });
        return;
    }

    addQuote(req.body.quote, () => {});
});
*/
export { apiRouter };
