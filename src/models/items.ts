import { Schema, InferSchemaType, model } from "mongoose";

const ItemSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

// Typescript type for documents
export type ItemDoc = InferSchemaType<typeof ItemSchema>;
export const ItemModel = model("Item", ItemSchema);