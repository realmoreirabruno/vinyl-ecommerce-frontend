import { useAuth } from '@/hooks/UseAuth';
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Page01() {
  const { name } = useAuth();
  const _navigate = useNavigate();
  return (
    <div>
      <h1>{`Page01 - LOGADO (${name})`}</h1>
      <button onClick={() => _navigate('/page02')}>Navegar</button>
    </div>
  )
}
