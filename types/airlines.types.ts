import { Types } from "mongoose";

// 🔹 DB Type (Mongo)
export interface IAirline {
    _id: Types.ObjectId;
    name: string;
    image: string;
    logo: string;
    flightNumbers: string[];
    createdAt: Date;
    updatedAt: Date;
}

// 🔹 Base API Type (shared fields)
export interface IAirlineBase {
    id: string;
    name: string;
    logo: string;
}

// 🔹 Light Type (slider / list)
export interface IAirlineLight extends IAirlineBase { }

// 🔹 Full Type (details page)
export interface IAirlineFull extends IAirlineBase {
    image: string;
    flightNumbers: string[];
    createdAt: Date;
    updatedAt: Date;
}