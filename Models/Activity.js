import { Schema, model } from "mongoose";

const activitySchema = Schema(
  {
    activity: { type: String, required: true },
    activityImg: { type: String, required: true },
    itineraryId: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
);

const Itinerary = model("Activity", activitySchema);

export default activity;
