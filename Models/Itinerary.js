import { Schema, model } from "mongoose";

const itinerarySchema = Schema(
  {
    name: { type: String, required: true },
    user: { type: String, required: true },
    userImg: { type: String, required: true },
    city: { type: Schema.Types.ObjectId, ref: "City", required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    likes: { type: Number, required: true },
    hashtags: [{ type: String, required: true }],
    activities: [{ type: String }],
    comments: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const Itinerary = model("Itinerary", itinerarySchema);

export default Itinerary;
