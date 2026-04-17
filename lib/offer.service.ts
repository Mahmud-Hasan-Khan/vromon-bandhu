import { IOffer, IOfferFull, IOfferLight } from "@/types/offer.types";
import { connectDB } from "./connectDB";
import OfferModel from "@/models/offer.model";
import mongoose from "mongoose";
import { cache } from "react";
import { unstable_cache } from "next/cache";

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
export const getOffers = cache(async (): Promise<IOfferFull[]> => {
  return unstable_cache(
    async () => {
      await connectDB();
      const offers = await OfferModel.find()
        .sort({ createdAt: -1 })
        .lean();
      return offers.map(mapToOfferFull);
    },
    ["offers-list"],
    { revalidate: 3600, tags: ["offers"] }
  )();
});


// ✅ 2. Get lightweight offers (for slider)
export const getLightweightOffers = cache(async (): Promise<IOfferLight[]> => {
  return unstable_cache(
    async () => {
      await connectDB();
      const offers = await OfferModel.find()
        .select("title image")
        .sort({ createdAt: -1 })
        .lean();
      return offers.map(mapToOfferLight);
    },
    ["offers-light-list"],
    { revalidate: 3600, tags: ["offers"] }
  )();
});


// ✅ 3. Create Offer
export async function createOffer(
  data: Omit<IOffer, "_id" | "createdAt" | "updatedAt">
): Promise<IOfferFull> {
  await connectDB();

  const offer = await OfferModel.create(data);

  return mapToOfferFull(offer.toObject());
}


// ✅ 4. Get Offer By ID
export const getOfferById = cache(async (id: string): Promise<IOfferFull | null> => {
  return unstable_cache(
    async () => {
      await connectDB();
      if (!mongoose.Types.ObjectId.isValid(id)) return null;
      const offer = await OfferModel.findById(id).lean();
      if (!offer) return null;
      return mapToOfferFull(offer);
    },
    [`offer-detail-${id}`],
    { revalidate: 3600, tags: ["offers"] }
  )();
});


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