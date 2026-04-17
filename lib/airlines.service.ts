import { connectDB } from "./connectDB";
import mongoose from "mongoose";
import { IAirline, IAirlineFull, IAirlineLight } from "@/types/airlines.types";
import AirlinesModel from "@/models/airlines.model";
import { cache } from "react";
import { unstable_cache } from "next/cache";

// 🔹 Full mapper
const mapToAirlineFull = (airline: IAirline): IAirlineFull => ({
  id: airline._id.toString(),
  name: airline.name,
  image: airline.image,
  logo: airline.logo,
  flightNumbers: airline.flightNumbers,
  createdAt: airline.createdAt,
  updatedAt: airline.updatedAt,
});

// 🔹 Light mapper
const mapToAirlineLight = (airline: IAirline): IAirlineLight => ({
  id: airline._id.toString(),
  name: airline.name,
  logo: airline.logo,
});


// ✅ 1. Get All Airlines (FULL DATA)
export const getAirlines = cache(async (): Promise<IAirlineFull[]> => {
  return unstable_cache(
    async () => {
      await connectDB();
      const airlines = await AirlinesModel.find()
        .sort({ createdAt: -1 })
        .lean();
      return airlines.map(mapToAirlineFull);
    },
    ["airlines-list"],
    { revalidate: 604800, tags: ["airlines"] }
  )();
});


// ✅ 2. Get lightweight offers (for slider)
export const getLightweightAirlines = cache(async (): Promise<IAirlineLight[]> => {
  return unstable_cache(
    async () => {
      await connectDB();
      const airlines = await AirlinesModel.find()
        .select("name logo")
        .sort({ createdAt: -1 })
        .lean();
      return airlines.map(mapToAirlineLight);
    },
    ["airlines-light-list"],
    { revalidate: 604800, tags: ["airlines"] }
  )();
});


// ✅ 3. Create Airline
export async function createAirline(
  data: Omit<IAirline, "_id" | "createdAt" | "updatedAt">
): Promise<IAirlineFull> {
  await connectDB();

  const airline = await AirlinesModel.create(data);

  return mapToAirlineFull(airline.toObject());
}


// ✅ 4. Get Airline By ID
export async function getAirlineById(
  id: string
): Promise<IAirlineFull | null> {
  await connectDB();

  if (!mongoose.Types.ObjectId.isValid(id)) return null;

  const airline = await AirlinesModel.findById(id).lean();
  if (!airline) return null;

  return mapToAirlineFull(airline);
}


// ✅ 5. Delete Airline
export async function deleteAirline(id: string): Promise<boolean> {
  await connectDB();

  if (!mongoose.Types.ObjectId.isValid(id)) return false;

  const result = await AirlinesModel.findByIdAndDelete(id);
  return !!result;
}


// ✅ 6. Update Airline
export async function updateAirline(
  id: string,
  data: Partial<Omit<IAirline, "_id" | "createdAt" | "updatedAt">>
): Promise<IAirlineFull | null> {
  await connectDB();

  if (!mongoose.Types.ObjectId.isValid(id)) return null;

  const updated = await AirlinesModel.findByIdAndUpdate(id, data, {
    new: true,
  }).lean();

  if (!updated) return null;

  return mapToAirlineFull(updated);
}