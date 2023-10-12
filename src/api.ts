import { Router } from "express";

import quotes from "./quotes";

const apiRouter: Router = Router();

apiRouter.use((_req, res, next) => {
    res.append("Access-Control-Allow-Origin", "*");
    next();
});

apiRouter.get("/quote/latest", (_req, res) => {
    res.send({
        quote: quotes[quotes.length - 1]
    });
});

apiRouter.get("/quote/:index", (req, res) => {
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


export = apiRouter;