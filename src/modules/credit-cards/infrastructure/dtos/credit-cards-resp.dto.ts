import {z } from 'zod'

export const creditCardsResponseSchema = z.object({
  name: z.string(),
  number: z.string(),
  brand: z.string(),
  limitRd: z.number(),
  balaceRd: z.number(),
  limitUsd: z.optional(z.number()),
  balanceUsd: z.optional(z.number()),
  validDate: z.object({
    month: z.string(),
    year: z.string()
  }),
  status: z.string()
})



export type CreditCardRespDto = z.infer<typeof creditCardsResponseSchema>

export const AllCreditCardsResponseSchema = z.array(creditCardsResponseSchema)
