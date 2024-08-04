import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsRequest,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailMock = http.get<
  GetOrderDetailsRequest,
  never,
  GetOrderDetailsResponse
>(`/orders/:orderId`, ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'Rodrigo Bussolo',
      email: 'rbussolo91@gmail.com',
      phone: '(65) 99681-0181',
    },
    status: 'delivered',
    createdAt: new Date().toISOString(),
    totalInCents: 50000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 20000,
        product: {
          name: 'Pizza brotinho de atum',
        },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 30000,
        product: {
          name: 'Pizza de calabresa',
        },
        quantity: 1,
      },
    ],
  })
})
