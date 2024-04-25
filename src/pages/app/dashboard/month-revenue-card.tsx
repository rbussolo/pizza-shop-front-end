import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthRevenue } from '@/api/get-month-revenue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricsCardSkeleton } from './metrics-card-skeleton'

export function MonthRevenueCard() {
  const { data: monthRevenue } = useQuery({
    queryKey: ['metrics', 'month-revenue'],
    queryFn: getMonthRevenue,
  })

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthRevenue ? (
          <>
            <span className="text-2xl font-bold tracking-tighter">
              {(monthRevenue.receipt / 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            {monthRevenue.diffFromLastMonth >= 0 ? (
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500 dark:text-green-400">
                  +{monthRevenue.diffFromLastMonth.toLocaleString('pt-BR')}%
                </span>{' '}
                em relação ao mês passado
              </p>
            ) : (
              <p className="text-xs text-muted-foreground">
                <span className="text-red-500 dark:text-red-400">
                  {monthRevenue.diffFromLastMonth.toLocaleString('pt-BR')}%
                </span>{' '}
                em relação ao mês passado
              </p>
            )}
          </>
        ) : (
          <MetricsCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
