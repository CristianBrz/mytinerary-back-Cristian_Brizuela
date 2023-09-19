import { Router } from "express";
import itinerariesController from "../controller/itinerariesController.js";


const itinerariesRouter = Router();
const {
  getAllItineraries,
  createOneItinerary,
  updateOneItinerary,
  deleteOneItinerary,
  getOneItinerary,
} = itinerariesController;

itinerariesRouter.get("/", getAllItineraries);
itinerariesRouter.get("/:id", getOneItinerary);
itinerariesRouter.post("/", createOneItinerary);
itinerariesRouter.put("/:id", updateOneItinerary);
itinerariesRouter.delete("/:id", deleteOneItinerary);

export default itinerariesRouter;
