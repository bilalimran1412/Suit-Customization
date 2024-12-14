import express from "express";
import { createSuite } from "../controller/suite.js";
import { userMiddleware } from "../middleware/auth.js";
import { getSuitesByUser } from "../controller/suite.js";

const suiteRouter = express.Router();

suiteRouter.use(express.json());
suiteRouter.use(express.urlencoded({ extended: true }));

// create suite
suiteRouter.post("/createSuite", userMiddleware, createSuite);
suiteRouter.get("/getSuitesByUser", userMiddleware, getSuitesByUser);

export default suiteRouter;
