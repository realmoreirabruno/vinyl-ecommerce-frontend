import { useAuth } from '@/hooks/UseAuth';
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Page02() {
  const { logout } = useAuth();
  const _navigate = useNavigate();

  return (
    <div>
      <h1>Page02 - NÃO LOGADO</h1>
      <button onClick={() => _navigate('/page01')} className='bg-zinc-900 text-white m-1 p-2'>Navegar</button>
      <button onClick={() => logout()} className='bg-red-600 p-2 text-white m-2'>Sair</button>
    </div>
  )
}
