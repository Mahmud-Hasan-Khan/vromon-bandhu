import { IOffer, IOfferFull, IOfferLight } from "@/types/offer.types";
import { connectDB } from "./connectDB";
import OfferModel from "@/models/offer.model";
import mongoose from "mongoose";

// 🔹 Full mapper
const mapToOfferFull = (offer: IOffer): IOfferFull => ({
  id: offer._id.toString(),
  title: offer.title,
  description: offer.description,
  image: offer.image,
  createdAt: offer.createdAt,
  updatedAt: offer.updatedAt,
});

// 🔹 Light mapper
const mapToOfferLight = (offer: IOffer): IOfferLight => ({
  id: offer._id.toString(),
  title: offer.title,
  image: offer.image,
});


// ✅ 1. Get All Offers (FULL DATA)
export async function getOffers(): Promise<IOfferFull[]> {
  await connectDB();

  const offers = await OfferModel.find()
    .sort({ createdAt: -1 })
    .lean();

  return offers.map(mapToOfferFull);
}


// ✅ 2. Get lightweight offers (for slider)
export async function getLightweightOffers(): Promise<IOfferLight[]> {
  await connectDB();

  const offers = await OfferModel.find()
    .select("title image")
    .sort({ createdAt: -1 })
    .lean();

  return offers.map(mapToOfferLight);
}


// ✅ 3. Create Offer
export async function createOffer(
  data: Omit<IOffer, "_id" | "createdAt" | "updatedAt">
): Promise<IOfferFull> {
  await connectDB();

  const offer = await OfferModel.create(data);

  return mapToOfferFull(offer.toObject());
}


// ✅ 4. Get Offer By ID
export async function getOfferById(
  id: string
): Promise<IOfferFull | null> {
  await connectDB();

  if (!mongoose.Types.ObjectId.isValid(id)) return null;

  const offer = await OfferModel.findById(id).lean();
  if (!offer) return null;

  return mapToOfferFull(offer);
}


// ✅ 5. Delete Offer
export async function deleteOffer(id: string): Promise<boolean> {
  await connectDB();

  if (!mongoose.Types.ObjectId.isValid(id)) return false;

  const result = await OfferModel.findByIdAndDelete(id);
  return !!result;
}


// ✅ 6. Update Offer
export async function updateOffer(
  id: string,
  data: Partial<Omit<IOffer, "_id" | "createdAt" | "updatedAt">>
): Promise<IOfferFull | null> {
  await connectDB();

  if (!mongoose.Types.ObjectId.isValid(id)) return null;

  const updated = await OfferModel.findByIdAndUpdate(id, data, {
    new: true,
  }).lean();

  if (!updated) return null;

  return mapToOfferFull(updated);
}