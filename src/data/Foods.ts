import { Food } from "@/@types/Food";
import { AddForm } from "@/lib/FormSchema";
import axios from "axios";

const req = axios.create({
  baseURL: "http://localhost:8080",
});

export const addFood = async (data: AddForm) => {
  const res = await req.post("/food", data);
  return res.data as Food;
};

export const getAllFoods = async () => {
  const res = await req.get("/food");
  return res.data as Food[];
};
