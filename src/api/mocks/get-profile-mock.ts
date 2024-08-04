import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-id',
      name: 'Rodrigo Bussolo',
      email: 'rbussolo91@gmail.com',
      phone: '(65) 99681-0181',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
