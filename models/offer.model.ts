import mongoose, { Schema, model, models, Model } from "mongoose";
import { IOffer } from "@/types/offer.types";

const OfferSchema = new Schema<IOffer>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true, // This handles createdAt and updatedAt automatically
    collection: "OfferNoticeCard",
  }
);

const OfferModel: Model<IOffer> =
  models.OfferModel || model<IOffer>("OfferModel", OfferSchema);

export default OfferModel;
