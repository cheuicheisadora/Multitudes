import { z } from 'zod'

export const leadSchema = z.object({
  name: z.string().min(2, 'Nome deve ter ao menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().optional(),
  role: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  context: z.string().optional(),
  source: z.string().optional(),
})

export const subscriberSchema = z.object({
  email: z.string().email('E-mail inválido'),
  name: z.string().optional(),
})

export const videoSchema = z.object({
  title: z.string().min(2),
  url: z.string().url(),
  platform: z.enum(['youtube', 'tiktok']),
  category: z.string().min(2),
  thumbnail: z.string().url().optional(),
  publishedAt: z.string().datetime().optional(),
})

export const editionSchema = z.object({
  title: z.string().min(2),
  summary: z.string().optional(),
  publishedAt: z.string().datetime().optional(),
  url: z.string().url(),
})

export type LeadInput = z.infer<typeof leadSchema>
export type SubscriberInput = z.infer<typeof subscriberSchema>
export type VideoInput = z.infer<typeof videoSchema>
export type EditionInput = z.infer<typeof editionSchema>
