import { Schema, model } from "mongoose";

const citySchema = Schema(
  {
    img: { type: String, required: true },
    description: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    language: { type: String, required: true },
    currency: { type: String, required: true },
    flag: { type: String, required: true },
    continent: { type: String, required: true },
    itineraries: [{ type: Schema.Types.ObjectId, ref: "Itinerary" }],
    // itineraries: [{ type: Schema.Types.ObjectId, ref: "itinerary" }],
  },
  {
    timestamps: true,
  }
);

const City = model("City", citySchema);

export default City;
