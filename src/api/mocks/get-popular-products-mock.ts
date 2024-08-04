import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    {
      product: 'Calabresa',
      amount: 295,
    },
    {
      product: 'Portuguesa',
      amount: 159,
    },
    {
      product: 'Atum',
      amount: 70,
    },
    {
      product: '4 Queijos',
      amount: 200,
    },
  ])
})
