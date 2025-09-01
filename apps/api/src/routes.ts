import { Router } from "express";
import { prisma } from "./db.js";
import { CreatePropertyZ } from "@mpb/shared";

export const router = Router();

router.get("/properties", async (_req, res) => {
  const items = await prisma.property.findMany({
    orderBy: { createdAt: "desc" }
  });
  res.json(items);
});

router.post("/properties", async (req, res) => {
  const parsed = CreatePropertyZ.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
  const created = await prisma.property.create({ data: parsed.data });
  res.status(201).json(created);
});
