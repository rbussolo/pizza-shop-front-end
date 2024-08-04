import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    {
      date: '01/08/2024',
      receipt: 25800,
    },
    {
      date: '02/08/2024',
      receipt: 35800,
    },
    {
      date: '03/08/2024',
      receipt: 55800,
    },
    {
      date: '04/08/2024',
      receipt: 32500,
    },
    {
      date: '05/08/2024',
      receipt: 62200,
    },
    {
      date: '06/08/2024',
      receipt: 11100,
    },
    {
      date: '07/08/2024',
      receipt: 25500,
    },
  ])
})
