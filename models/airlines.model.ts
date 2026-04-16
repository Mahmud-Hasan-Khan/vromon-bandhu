import mongoose, { Schema, model, models, Model } from "mongoose";
import { IAirline, IAirlineFull } from "@/types/airlines.types";

const airlinesSchema = new Schema<IAirline>(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    logo: { type: String, required: true },
    flightNumbers: { type: [String], required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true, // This handles createdAt and updatedAt automatically
    collection: "airlines",
  }
);

const AirlinesModel: Model<IAirline> =
  models.AirlinesModel || model<IAirline>("AirlinesModel", airlinesSchema);

export default AirlinesModel;
