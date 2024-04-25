import { Link, useRouteError } from 'react-router-dom'

export function Error() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error = useRouteError() as any

  if (error?.status === 404) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Página não encontrada</h1>
        <p className="text-accent-foreground">
          Voltar para o{' '}
          <Link to="/" className="text-sky-600 dark:text-sky-400">
            Dashboard
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">
        Eita, aconteceu alguma coisa errada
      </h1>
      <p>Um erro aconteceu na aplicação, abaixo você encontra mais detalhes:</p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-600 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
