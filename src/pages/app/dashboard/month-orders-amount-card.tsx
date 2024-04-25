import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getMonthOrdersAmount } from '@/api/get-month-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricsCardSkeleton } from './metrics-card-skeleton'

export function MonthOrdersAmountCard() {
  const { data: monthOrdersAmount } = useQuery({
    queryKey: ['metrics', 'month-orders-amount'],
    queryFn: getMonthOrdersAmount,
  })

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Total de pedidos (mês)
        </CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tighter">
              {monthOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            {monthOrdersAmount.diffFromLastMonth >= 0 ? (
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500 dark:text-green-400">
                  +{monthOrdersAmount.diffFromLastMonth.toLocaleString('pt-BR')}
                  %
                </span>{' '}
                em relação ao mês passado
              </p>
            ) : (
              <p className="text-xs text-muted-foreground">
                <span className="text-red-500 dark:text-red-400">
                  {monthOrdersAmount.diffFromLastMonth.toLocaleString('pt-BR')}%
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
