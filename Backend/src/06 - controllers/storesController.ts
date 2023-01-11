import express, { Request, Response, NextFunction } from "express";
import StoreModel from "../04 - models/StoreModel";
import storesLogic from "../05 - logic/storesLogic";

const router = express.Router();

router.get(
  "/stores",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const store = await storesLogic.getData();
      response.json(store);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/stores",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const store = new StoreModel(request.body);
      const newstore = await storesLogic.addSingleData(store);
      response.status(201).json(newstore);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
