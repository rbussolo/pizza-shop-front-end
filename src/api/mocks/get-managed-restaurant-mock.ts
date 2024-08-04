import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-id',
    name: 'Pizzaria Italiana',
    description: 'A melhor pizza da cidade',
    managerId: 'custom-id',
    createdAt: new Date(),
    updatedAt: null,
  })
})
