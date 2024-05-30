import React, { FormEvent, useState } from 'react'
import logo from '../../assets/logo.svg'
import Input2 from '@/components/custom/input'
import { useAuth } from '@/hooks/UseAuth';
import { Navigate, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuthenticated } = useAuth();
  const _navigate = useNavigate();

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    login(email,password).then(() => {
      toast.success("Login efetuado com sucesso!");
      setTimeout(() => {
        _navigate('/page01');
      },2000)
    }).catch(() => {
      toast.error("Erro ao efetuar o login...");
    })
  }


  return (
    <>
    {isAuthenticated && <Navigate to='/page01' />}
      <div className='bg-fundo bg-no-repeat bg-cover h-screen'>
      <div className='flex h-screen items-center justify-center backdrop-brightness-50 backdrop-blur-sm'>
        {/* Container */}
        <div className='flex max-w-[544px] bg-white p-8 rounded-lg'>
              <div className='flex flex-col items-center w-full gap-2'>
                  <img src={ logo } className='h-12'/>
                  <h1 className='text-xl font-semibold'>Acesse sua conta</h1>
                  {/* From */}
                  <form onSubmit={handleLogin}className='flex flex-col w-72'>
                      <Input2 onChange={e => setEmail(e.target.value)} type='email'>Email</Input2>
                      <Input2 onChange={e => setPassword(e.target.value)} type='password'>Senha</Input2>
                      <button type='submit' className='p-3 bg-zinc-900 text-white rounded-lg hover:ring-offset-zinc-900/90 transition mb-3'>Entrar</button>
                  </form>
                  <span className='text-xs font-light'>Ainda não tem conta? <a href="/signup" className='font-semibold underline'>Inscrever-se</a></span>
                  {/* From */}
              </div>
          </div>
          {/* Container */}
      </div>
    </div>
    </>
  )
}
