import {z } from "zod";
export const formSchema = z.object({
    name: z.string().min(2).max(250),
    description: z.string().min(2).max(250),
    ubication: z.string().min(2).max(250),
    rating: z.string().min(2).max(50),
    photo: z.string().min(1).max(100),
    isPublish: z.boolean(),
    category: z.string().min(1).max(255),
  })