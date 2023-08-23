import { Schema, model } from "mongoose";

const citySchema = Schema({
  img: { type: String, required: true },
  description: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  language: { type: String, required: true },
  currency: { type: String, required: true },
  flag: { type: String, required: true },
  continent: { type: String, required: true },
  attractions: { type: String, required: true }, // ver si lo puedo puedo pasar como array
},{
	timestamps: true
});

const City = model('city', citySchema);

export default City;