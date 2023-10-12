import express, { Router } from "express";

const CWD = process.env.INIT_CWD;

const staticRouter: Router = Router();

staticRouter.use(express.static("public"));
staticRouter.use("/chota.css", express.static(CWD + "/node_modules/chota/dist/chota.css"));
staticRouter.use("/assets", express.static(__dirname + "/public/assets"))

export { staticRouter };
