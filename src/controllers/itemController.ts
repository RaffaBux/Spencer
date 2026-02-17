import { Request, Response, NextFunction } from 'express';
import { ItemModel } from "../models/items";

// Create an item
export const createItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;
    if (!name || typeof name !== "string") return res.status(400).json({ message: "name is required (string)" });

    const created = await ItemModel.create({ name });
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
};

// Read all items
export const getItems = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await ItemModel.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    next(err);
  }
};

// Read single item
export const getItemById = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const id = parseInt(req.params.id as string, 10);
		if (Number.isNaN(id)) return res.status(400).json({ message: 'Invalid id' });

		const item = await ItemModel.findById(id);
		if (!item) return res.status(404).json({ message: 'Item not found' });

		res.json(item);
	} catch (error) {
		next(error);
	}
};

// Update an item
export const updateItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updated = await ItemModel.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );

    if (!updated)
      return res.status(404).json({ message: "Item not found" });

    res.json(updated);

  } catch (err) {
    next(err);
  }
};

// Delete an item
export const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    const deletedItem = await ItemModel.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json(deletedItem);

  } catch (error) {
    next(error);
  }
};