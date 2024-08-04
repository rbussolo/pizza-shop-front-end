import { http, HttpResponse } from 'msw'

export const signOutMock = http.post('/sign-out', () => {
  return new HttpResponse(null, {
    status: 200,
    headers: {
      'Set-Cookie':
        'auth=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT',
    },
  })
})
