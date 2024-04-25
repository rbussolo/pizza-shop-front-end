type OrderType =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderType
}

const orderStatusMap: Record<OrderType, string> = {
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  pending: 'Pendente',
  processing: 'Em preparo',
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-slate-400"
        ></span>
      )}

      {status === 'canceled' && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-red-500"
        ></span>
      )}

      {status === 'delivered' && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-green-500"
        ></span>
      )}

      {status === 'delivering' && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-orange-500"
        ></span>
      )}

      {status === 'processing' && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-yellow-500"
        ></span>
      )}

      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
