import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { date: '07/04', revenue: 850.59 },
  { date: '08/04', revenue: 1850.19 },
  { date: '09/04', revenue: 350.49 },
  { date: '10/04', revenue: 1250.59 },
  { date: '11/04', revenue: 1150.39 },
  { date: '12/04', revenue: 550.29 },
  { date: '13/04', revenue: 999.99 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex flex-row items-center justify-between pb-8">
        <CardTitle className="font-base font-medium">
          Receita no periodo
        </CardTitle>
        <CardDescription>Receita no periodo</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={248}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" dy={8} />
            <YAxis
              dataKey="revenue"
              dx={-8}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
              width={80}
            />
            <Line
              type="linear"
              dataKey="revenue"
              stroke={colors.violet[500]}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
