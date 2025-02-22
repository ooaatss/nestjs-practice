import { z } from 'zod';

export const createPropertSchema = z
  .object({
    name: z.string(),
    description: z.string().min(5, {
      message: 'La descripcion debe de tener al menos 5 caracteres',
    }),
    area: z.number().positive(),
  })
  .required();

export type CreatePropertyZodDto = z.infer<typeof createPropertSchema>;
