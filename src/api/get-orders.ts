import { api } from '@/lib/axios'

export type OrderStatusType =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

export interface GetOrdersResponse {
  orders: {
    orderId: string
    createdAt: string
    status: OrderStatusType
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export interface GetOrdersRequest {
  pageIndex?: number
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}

export async function getOrders({
  pageIndex = 0,
  orderId,
  customerName,
  status,
}: GetOrdersRequest) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
      orderId,
      customerName,
      status,
    },
  })

  return response.data
}
