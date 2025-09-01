import { z } from "zod";

/** DB entity (what the API returns) */
export const PropertyZ = z.object({
  id: z.number().int().optional(),          // created by DB
  title: z.string().min(2),
  price: z.number().nonnegative(),
  location: z.string().min(2),
  description: z.string().min(5),
  image: z.string().url(),
  createdAt: z.string().optional()          // ISO string when serialized
});
export type Property = z.infer<typeof PropertyZ>;

/** POST /properties payload (client → server) */
export const CreatePropertyZ = PropertyZ.omit({
  id: true,
  createdAt: true
});
export type CreateProperty = z.infer<typeof CreatePropertyZ>;
