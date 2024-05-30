import React, { FormEvent, useState } from 'react'
import Input from '../../components/input'
import { api } from '../../services/apiService'
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';


export default function Signup() {
  const [name, setName] = useState(""); //poderia usar useState<UserModel>();
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

async function handleSignUp(event: FormEvent) {
  setLoading(true);
  const toastId = toast.loading("Criando conta...");
  event.preventDefault();

  console.log("PASSOU AQUI...");
  const data = {
    name,
    email,
    tel,
    password
  };

  await api.post("api/v1/user/signup", data)
  .then(resp => {
    console.log(resp);
    toast.dismiss(toastId);
    toast.success("Conta criada com sucesso!");
    setLoading(false);
  })
}

  return (
    <main className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col bg-white rounded-md h-fit w-full max-w-[330px] items-center p-8 shadow-md">
            <h1 className="text-2xl font-bold">Inscreva-se</h1>
            <form onSubmit={handleSignUp} className="flex flex-col w-full mt-6 gap-2">
                <Input type='text' onChange={event => setName(event?.target.value)}>Nome</Input>
                <Input type='email' required onChange={event => setEmail(event?.target.value)}>Email</Input>
                <Input type='tel' onChange={event => setTel(event?.target.value)}>Telefone</Input>
                <Input type='password' required onChange={event => setPassword(event?.target.value)}>Senha</Input>

                { loading ?
                  <Button disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Carregando...
                  </Button>
                  :
                  <Button type='submit' disabled={false} variant="outline" className="bg-zinc-900 text-white">
                    Inscrever-se
                  </Button>
                }
            </form>
        </div>
    </main>
  )
}