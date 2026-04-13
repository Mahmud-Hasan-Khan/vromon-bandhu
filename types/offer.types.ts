import { Types } from "mongoose";

// 🔹 DB Type (Mongo)
export interface IOffer {
  _id: Types.ObjectId;
  title: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

// 🔹 Base API Type (shared fields)
export interface IOfferBase {
  id: string;
  title: string;
  image: string;
}

// 🔹 Light Type (slider / list)
export interface IOfferLight extends IOfferBase {}

// 🔹 Full Type (details page)
export interface IOfferFull extends IOfferBase {
  description: string;
  createdAt: Date;
  updatedAt: Date;
}