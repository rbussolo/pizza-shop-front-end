import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <>
      <div>Cabeçalho</div>

      <div>
        <Outlet />
      </div>
    </>
  )
}
